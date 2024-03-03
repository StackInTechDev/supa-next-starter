CREATE USER prisma_user WITH PASSWORD 'password';

-- need usage of the public schema
GRANT USAGE ON SCHEMA public to prisma_user;
-- need access to sequences for creates
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public to prisma_user;
-- need access to tables
GRANT ALL ON ALL TABLES IN SCHEMA public TO prisma_user;