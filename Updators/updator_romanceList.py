import json
import os
from aladin_list_search_api import aladin_list_search_api

def save_bestseller_data():
    try:
        data = aladin_list_search_api("ItemEditorChoice",51250)
        
        if data is not None:
            # 현재 스크립트 파일의 상위 폴더에 있는 RealData 폴더 경로 생성
            current_dir = os.path.dirname(os.path.abspath(__file__))
            real_data_dir = os.path.join(current_dir, "..", "RealData")
            file_path = os.path.join(real_data_dir, "romanceList.json")
            
            # RealData 폴더가 존재하지 않으면 생성
            os.makedirs(real_data_dir, exist_ok=True)
            
            # JSON 데이터를 RealData 폴더에 파일로 저장
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            print("Data saved successfully to RealData folder")
        else:
            print("No data to save")
    except Exception as e:
        print(f"Failed to fetch and save data: {e}")

# 함수 실행
save_bestseller_data()
