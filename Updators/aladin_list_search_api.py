import requests
import re
import os

def aladin_list_search_api(type, category_id=None):
    def fetch_aladin_list_search(type, category_id):
        auth_key = "ttbbora52421540002"
        
        try:
            api_url = f"http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey={auth_key}&QueryType={type}&SearchTarget=Book&output=js&Version=20131101"
            if category_id is not None:
                api_url += f"&CategoryId={category_id}"
            
            print(api_url)
            response = requests.get(api_url)
            response.raise_for_status()  # HTTP 오류 발생 시 예외 발생
            
            result = response.json()
            return result
        except requests.RequestException as e:
            print(f"API 요청 실패: {e}")
            return None

    def get_author(author):
        pattern = re.compile(r'^(.*?)\s*\(지은이\)')
        match = pattern.match(author)
        return match.group(1) if match else author

    aladin_list_search_result = fetch_aladin_list_search(type, category_id)
    if aladin_list_search_result is None:
        return []

    filtered_result = [book for book in aladin_list_search_result.get('item', []) if book.get('isbn13')]

    book_results = [{
        'title': book['title'],
        'authorName': get_author(book['author']),
        'isbn13': book['isbn13'],
        'cover': book['cover'],
        'customerReviewRank': book['customerReviewRank'],
    } for book in filtered_result]

    return book_results
