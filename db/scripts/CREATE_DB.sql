-- Drop all tables in the current database
DO $$ DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
        EXECUTE 'DROP TABLE IF EXISTS ' || quote_ident(r.tablename) || ' CASCADE';
    END LOOP;
END $$;

-- Optional: Drop the schema if you want to recreate it
DROP SCHEMA IF EXISTS library CASCADE;
CREATE SCHEMA library;
