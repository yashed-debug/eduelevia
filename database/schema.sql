-- EduElevia database schema (starter)
-- Choose a DB engine (e.g., Postgres/MySQL/SQLite) and adapt types as needed.

-- Students
CREATE TABLE IF NOT EXISTS students (
  id            TEXT PRIMARY KEY,
  full_name     TEXT NOT NULL,
  grade_level   TEXT,
  created_at    TEXT NOT NULL
);

-- Lessons (metadata + JSON content)
CREATE TABLE IF NOT EXISTS lessons (
  id            TEXT PRIMARY KEY,
  subject       TEXT NOT NULL,
  title         TEXT NOT NULL,
  level         TEXT,
  content_json  TEXT NOT NULL,
  created_at    TEXT NOT NULL
);

-- Quiz sessions / attempts
CREATE TABLE IF NOT EXISTS sessions (
  id            TEXT PRIMARY KEY,
  student_id    TEXT NOT NULL,
  lesson_id     TEXT NOT NULL,
  score         INTEGER,
  duration_ms   INTEGER,
  answers_json  TEXT,
  created_at    TEXT NOT NULL,
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (lesson_id)  REFERENCES lessons(id)
);

-- Feedback (student/parent/teacher)
CREATE TABLE IF NOT EXISTS feedback (
  id            TEXT PRIMARY KEY,
  session_id    TEXT,
  role          TEXT NOT NULL,  -- student | parent | teacher
  rating        INTEGER,        -- 1..5
  message       TEXT,
  created_at    TEXT NOT NULL,
  FOREIGN KEY (session_id) REFERENCES sessions(id)
);

