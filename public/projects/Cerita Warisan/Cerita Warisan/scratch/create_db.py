import MySQLdb

try:
    # Connect without specifying a database
    conn = MySQLdb.connect(
        host='localhost',
        user='root',
        password='',
    )
    cursor = conn.cursor()
    cursor.execute("CREATE DATABASE IF NOT EXISTS pustaka_digital")
    print("Database 'pustaka_digital' created or already exists.")
    conn.close()
except Exception as e:
    print(f"Error: {e}")
