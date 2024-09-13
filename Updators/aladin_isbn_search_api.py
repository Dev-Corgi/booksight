import requests
import re
import os

def aladin_isbn_search_handler(item_id, opt_result=None):
    auth_key = "ttbbora52421540002"
    if not auth_key:
        raise ValueError("ALADIN_API_KEY environment variable not set")

    try:
        api_url = f"http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx?ttbkey={auth_key}&itemIdType=ISBN13&ItemId={item_id}&output=js&Version=20131101"
        if opt_result is not None:
            api_url += f"&OptResult={opt_result}"
        
        print(f"apiUrl은 {api_url}")
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

def main(item_id, opt_result=None):
    aladin_isbn_search_result = aladin_isbn_search_handler(item_id, opt_result)
    if not aladin_isbn_search_result or 'item' not in aladin_isbn_search_result:
        return None

    item = aladin_isbn_search_result['item'][0]
    item['author'] = get_author(item['author'])
    return item

# 예시로 main 함수를 호출하는 코드
if __name__ == "__main__":
    item_id = '9781234567890'  # 예시 ISBN
    result = main(item_id)
    print(result)
