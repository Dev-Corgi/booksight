import json
import mysql.connector
from aladin_list_search_api import aladin_list_search_api

def updator_newSpecial():
    conn = None  # conn 변수를 처음부터 정의
    try:
        # 1. MySQL 연결 설정
        conn = mysql.connector.connect(
            host="localhost",
            user="root",  # MySQL 사용자 이름
            password="Aa6765244!",  # MySQL 비밀번호
            database="booklistdatas"  # 사용할 데이터베이스 (공백이 있으면 안 됩니다!)
        )
        cursor = conn.cursor()

        # 2. 테이블 생성 (필요시)
        create_table_query = """
        CREATE TABLE IF NOT EXISTS new_list (
            id INT AUTO_INCREMENT PRIMARY KEY,
            data JSON
        )
        """
        cursor.execute(create_table_query)
        
        # 3. 기존 데이터 삭제
        cursor.execute("TRUNCATE TABLE new_list")

        # 4. API 데이터 가져오기
        result = aladin_list_search_api("ItemNewSpecial",1)

        if result is not None:
            # 5. 데이터 삽입
            insert_query = "INSERT INTO new_list (data) VALUES (%s)"
            cursor.execute(insert_query, (json.dumps(result),))  # Convert the result to JSON string and pass it as a tuple

            # 6. 변경사항 저장
            conn.commit()
            print("Data saved successfully to MySQL database")
        else:
            print("No data to save")

    except mysql.connector.Error as err:
        print(f"MySQL Error: {err}")
    except Exception as e:
        print(f"Failed to fetch and save data: {e}")
    finally:
        if conn is not None and conn.is_connected():
            cursor.close()
            conn.close()

# 함수 실행
updator_newSpecial()





