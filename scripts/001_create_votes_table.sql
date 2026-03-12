-- Таблица для голосування за картини
CREATE TABLE IF NOT EXISTS votes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  artwork_id INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(email, artwork_id)
);

-- Індекс для швидкого підрахунку голосів
CREATE INDEX IF NOT EXISTS idx_votes_artwork_id ON votes(artwork_id);

-- Дозволяємо анонімні вставки (без авторизації)
ALTER TABLE votes ENABLE ROW LEVEL SECURITY;

-- Політика: всі можуть голосувати (вставляти)
CREATE POLICY "Anyone can vote" ON votes
  FOR INSERT
  WITH CHECK (true);

-- Політика: всі можуть бачити кількість голосів
CREATE POLICY "Anyone can view votes" ON votes
  FOR SELECT
  USING (true);
