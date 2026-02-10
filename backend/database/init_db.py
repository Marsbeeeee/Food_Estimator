from backend.database.connection import get_db_connection

def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS profiles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        age INTEGER,
        height REAL,
        weight REAL,
        sex TEXT,
        activity_level TEXT,
        goal TEXT,
        kcal_target INTEGER,
        diet_style TEXT,
        allergies TEXT,
        exercise_type TEXT,
        pace TEXT
    );
                   ''')
    
    conn.commit()
    conn.close()

if __name__ == '__main__':
    init_db()
