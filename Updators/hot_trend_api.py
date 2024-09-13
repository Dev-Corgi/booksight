import requests
import re
import os
from datetime import datetime, timedelta
from aladin_isbn_search_api import main

def hot_trend_api(date):
    # auth_key = os.getenv('NARU_API_KEY')  # 환경 변수에서 API 키 가져오기
    auth_key = "2ec3000b20c3737f95d4da5fde8faf278134e845a61bbf1e059ebe061089abc8"
    if not auth_key:
        raise ValueError("NARU_API_KEY environment variable not set")

    try:
        api_url = f"http://data4library.kr/api/hotTrend?authKey={auth_key}&searchDt={date}&format=json"
        response = requests.get(api_url)
        response.raise_for_status()  # HTTP 오류 발생 시 예외 발생

        result = response.json()
        return result
    except requests.RequestException as e:
        print(f"API 요청 실패: {e}")
        return None

def get_yesterday():
    today = datetime.now()
    yesterday = today - timedelta(days=1)
    formatted_yesterday = yesterday.strftime('%Y-%m-%d')
    return formatted_yesterday

def get_author(author):
    pattern = re.compile(r'^(.*?)\s*\(지은이\)')
    match = pattern.match(author)
    return match.group(1) if match else author

def hot_trend():
    hot_trend_books = hot_trend_api(get_yesterday())
    if not hot_trend_books:
        return []

    docs = hot_trend_books.get('response', {}).get('results', [{}])[0].get('result', {}).get('docs', [])
    
    responses = []
    for book in docs:
        isbn13 = book.get('doc', {}).get('isbn13', '')
        response = main(isbn13, ["authors", "ratingInfo"])
        responses.append(response)

    book_results = []
    for book in responses:
        book_result = {
            'title': book.get('title', ''),
            'authorName': get_author(book.get('author', '')),
            'isbn13': book.get('isbn13', ''),
            'cover': book.get('cover', ''),
            'customerReviewRank': book.get('customerReviewRank', ''),
            'description': book.get('description', ''),
        }
        book_results.append(book_result)

    return book_results[:3]

# 함수 실행
if __name__ == "__main__":
    results = hot_trend()
    print(results)
