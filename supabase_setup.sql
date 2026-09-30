-- Table to store the entire site state as a single JSON document
CREATE TABLE IF NOT EXISTS site_state (
  id INTEGER PRIMARY KEY DEFAULT 1,
  data JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ DEFAULT now(),
  CONSTRAINT single_row CHECK (id = 1)
);

-- Enable Row Level Security
ALTER TABLE site_state ENABLE ROW LEVEL SECURITY;

-- Anyone can read the site state (public site)
CREATE POLICY "Public read access" ON site_state
  FOR SELECT USING (true);

-- Anyone can insert (for initial seed)
CREATE POLICY "Allow insert" ON site_state
  FOR INSERT WITH CHECK (true);

-- Anyone can update (admin PIN is validated client-side, same as current system)
CREATE POLICY "Allow update" ON site_state
  FOR UPDATE USING (true);

-- Enable Realtime on the table
ALTER PUBLICATION supabase_realtime ADD TABLE site_state;
