import { Pool } from "pg";
import "dotenv/config";
export const pool: Pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT!),
});

async function setUpMockData() {
  try {
    await pool.query(`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


    DROP TABLE IF EXISTS talents cascade;
    CREATE TABLE talents(
      talent_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      first_name VARCHAR(100) NOT NULL,
      last_name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      gender VARCHAR (100) NOT NULL,
      created_at TIMESTAMPTZ,
      is_active BOOLEAN DEFAULT FALSE
    );

    DROP TABLE IF EXISTS projects cascade;
    CREATE TABLE projects(
      project_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      project_name VARCHAR(300) NOT NULL,
      project_desc TEXT NOT NULL,
      created_by VARCHAR(100) NOT NULL,
      genre VARCHAR(100) NOT NULL,
      created_at TIMESTAMPTZ
    );


    DROP TABLE IF EXISTS talents_submitted_projects;
    CREATE TABLE talents_submitted_projects(
      talent_id UUID,
      project_id UUID,
      submitted_at TIMESTAMPTZ,
      FOREIGN KEY(talent_id) REFERENCES talents(talent_id),
      FOREIGN KEY(project_id) REFERENCES projects(project_id)
    );
`);

    await pool.query(
      `INSERT INTO talents(talent_id, first_name, last_name, email, gender, created_at, is_active)
        VALUES
        ('1cd927c7-49f0-4908-9882-bd5b01f4afe0', 'Pratham', 'Thakkar', 'pt@gmail.com', 'male', '2023-09-06', true),
        ('15e9bd92-3cc1-4b05-92e8-9a3c20711f8e', 'Vrunda', 'Shah', 'vs@gmail.com', 'female', '2023-09-06', false),
        ('c4e8bece-a922-40b9-8d0a-51ae81a7231d', 'Shweta', 'Thakkar', 'st@gmail.com', 'female', '2023-09-06', false),
        ('37ad66a5-2fff-4aac-9a68-2576ca3ed5d2', 'Aesha', 'Mahida', 'am@gmail.com', 'female', '2023-09-06', false),
        ('97e9d769-d95b-4d2a-b9fd-b67b982f88af', 'Ayush', 'Ghiya', 'ag@gmail.com', 'male', '2023-09-06', false),
        ('ec9e3d38-9325-4672-8ec3-e849a08fb33d', 'Jatin', 'Vatsa', 'jv@gmail.com', 'male', '2023-09-06', false),
        ('bae801cd-62f3-42b3-b5c1-9312ad8e0929', 'Samir', 'Patel', 'sp@gmail.com', 'male', '2023-09-06', false),
        ('785bd2a7-d0dc-44d7-b9a2-8bc56adeaf6d', 'Raj', 'Dave', 'rd@gmail.com', 'male', '2023-09-06', false);
  
        INSERT INTO projects (project_id, project_name, project_desc, created_by, genre, created_at)
        VALUES
          ('8e2027c4-cce7-44ad-a837-80abb231de94', 'Die Hard 2: Die Harder', 'John McClane tries to stop terrorists once again, this time at an airport.', 'Renny Harlin', 'Action', '2023-09-07 18:59:42.28187+05:30'),
          ('4389bf9d-a7e2-4937-9419-52ad5da48115', 'Forrest Gump', 'The life story of a man named Forrest Gump, who experiences various historical events.', 'Robert Zemeckis', 'Drama', '2023-09-07 19:00:52.038232+05:30'),
          ('70184f31-eaef-4cb3-9968-d04560739377', 'The Matrix', 'A computer hacker learns the truth about reality and joins a group of rebels against the machines.', 'The Wachowskis', 'Science Fiction', '2023-09-07 19:00:52.038232+05:30'),
          ('6e3b1d2b-29d0-43e6-bc38-8a43a0b2cc0e', 'Harry Potter and the Sorcerer''s Stone', 'A young wizard discovers his magical abilities and attends Hogwarts School of Witchcraft and Wizardry.', 'Chris Columbus', 'Fantasy', '2023-09-07 19:00:52.038232+05:30'),
          ('e6d8c29d-8f89-445d-9c52-710a81da6ff6', 'Interstellar', 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.', 'Christopher Nolan', 'Science Fiction', '2023-09-07 18:51:06.353+05:30'),
          ('490c9c77-a8a3-4c00-9e1a-5539466afbc1', 'Burning Bush', 'A thriller movie', 'Ivan Trojan', 'Mystery', '2023-09-07 18:45:58.224+05:30'),
          ('91c826f8-4ebb-4557-b2c5-b8b071dc99a8', 'Titanic', 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S.', 'James Cameron', 'Romance', '2023-09-07 18:47:12.628+05:30'),
          ('94c73daa-9c8c-4114-a011-0a9792c4b987', 'Forrest Gump', 'Forrest, a man with low IQ, recounts the early years of his life when he found himself in the middle of key historical events. All he wants now is to be reunited with his childhood sweetheart, Jenny.', 'Robert Zemeckis', 'Motivational', '2023-09-07 18:48:14.665+05:30'),
          ('c81568b8-b9bf-4473-b017-a7ad89a1975f', 'The Pursuit of Happyness', 'Tired of Chris''s professional failures, his wife decides to separate, leaving him financially broke with an unpaid internship in a brokerage firm and his son''s custody to deal with.', 'Gabriele Muccino', 'Emotional', '2023-09-07 18:49:18.661+05:30'),
          ('35f29711-7dc5-46d2-95fa-f0977870c436', 'The Big Bang Theory', 'The lives of four socially awkward friends, Leonard, Sheldon, Howard and Raj, take a wild turn when they meet the beautiful and free-spirited Penny.', 'Mark Cendrowski', 'Comedy', '2023-09-07 18:50:16.898+05:30');
  
          INSERT INTO talents_submitted_projects (project_id, talent_id, submitted_at)
          VALUES
            ('8e2027c4-cce7-44ad-a837-80abb231de94', '1cd927c7-49f0-4908-9882-bd5b01f4afe0', '2023-09-07 19:37:55.004+05:30'),
            ('c81568b8-b9bf-4473-b017-a7ad89a1975f', '1cd927c7-49f0-4908-9882-bd5b01f4afe0', '2023-09-07 19:38:15.523+05:30'),
            ('91c826f8-4ebb-4557-b2c5-b8b071dc99a8', '1cd927c7-49f0-4908-9882-bd5b01f4afe0', '2023-09-07 19:38:34.715+05:30'),
            ('e6d8c29d-8f89-445d-9c52-710a81da6ff6', '1cd927c7-49f0-4908-9882-bd5b01f4afe0', '2023-09-07 19:38:50.381+05:30'),
            ('4389bf9d-a7e2-4937-9419-52ad5da48115', '15e9bd92-3cc1-4b05-92e8-9a3c20711f8e', '2023-09-07 19:39:20.497+05:30'),
            ('35f29711-7dc5-46d2-95fa-f0977870c436', '15e9bd92-3cc1-4b05-92e8-9a3c20711f8e', '2023-09-07 19:39:38.375+05:30'),
            ('94c73daa-9c8c-4114-a011-0a9792c4b987', '15e9bd92-3cc1-4b05-92e8-9a3c20711f8e', '2023-09-07 19:39:53.489+05:30'),
            ('490c9c77-a8a3-4c00-9e1a-5539466afbc1', '15e9bd92-3cc1-4b05-92e8-9a3c20711f8e', '2023-09-07 19:40:09.481+05:30'),
            ('490c9c77-a8a3-4c00-9e1a-5539466afbc1', 'c4e8bece-a922-40b9-8d0a-51ae81a7231d', '2023-09-07 19:40:24.595+05:30'),
            ('70184f31-eaef-4cb3-9968-d04560739377', 'c4e8bece-a922-40b9-8d0a-51ae81a7231d', '2023-09-07 19:40:37.146+05:30'),
            ('8e2027c4-cce7-44ad-a837-80abb231de94', 'c4e8bece-a922-40b9-8d0a-51ae81a7231d', '2023-09-07 19:40:54.271+05:30'),
            ('c81568b8-b9bf-4473-b017-a7ad89a1975f', 'c4e8bece-a922-40b9-8d0a-51ae81a7231d', '2023-09-07 19:41:09.572+05:30'),
            ('91c826f8-4ebb-4557-b2c5-b8b071dc99a8', 'c4e8bece-a922-40b9-8d0a-51ae81a7231d', '2023-09-07 19:41:23.921+05:30'),
            ('6e3b1d2b-29d0-43e6-bc38-8a43a0b2cc0e', '37ad66a5-2fff-4aac-9a68-2576ca3ed5d2', '2023-09-07 19:41:50.472+05:30'),
            ('4389bf9d-a7e2-4937-9419-52ad5da48115', '37ad66a5-2fff-4aac-9a68-2576ca3ed5d2', '2023-09-07 19:42:04.086+05:30'),
            ('35f29711-7dc5-46d2-95fa-f0977870c436', '37ad66a5-2fff-4aac-9a68-2576ca3ed5d2', '2023-09-07 19:42:18.005+05:30'),
            ('94c73daa-9c8c-4114-a011-0a9792c4b987', '37ad66a5-2fff-4aac-9a68-2576ca3ed5d2', '2023-09-07 19:42:31.751+05:30'),
            ('e6d8c29d-8f89-445d-9c52-710a81da6ff6', '97e9d769-d95b-4d2a-b9fd-b67b982f88af', '2023-09-07 19:43:03.531+05:30'),
            ('70184f31-eaef-4cb3-9968-d04560739377', '97e9d769-d95b-4d2a-b9fd-b67b982f88af', '2023-09-07 19:43:16.208+05:30'),
            ('8e2027c4-cce7-44ad-a837-80abb231de94', '97e9d769-d95b-4d2a-b9fd-b67b982f88af', '2023-09-07 19:43:32.921+05:30'),
            ('c81568b8-b9bf-4473-b017-a7ad89a1975f', '97e9d769-d95b-4d2a-b9fd-b67b982f88af', '2023-09-07 19:43:49.286+05:30'),
            ('490c9c77-a8a3-4c00-9e1a-5539466afbc1', 'ec9e3d38-9325-4672-8ec3-e849a08fb33d', '2023-09-07 19:44:07.247+05:30'),
            ('6e3b1d2b-29d0-43e6-bc38-8a43a0b2cc0e', 'ec9e3d38-9325-4672-8ec3-e849a08fb33d', '2023-09-07 19:44:26.138+05:30'),
            ('4389bf9d-a7e2-4937-9419-52ad5da48115', 'ec9e3d38-9325-4672-8ec3-e849a08fb33d', '2023-09-07 19:44:39.037+05:30'),
            ('35f29711-7dc5-46d2-95fa-f0977870c436', 'ec9e3d38-9325-4672-8ec3-e849a08fb33d', '2023-09-07 19:44:51.009+05:30'),
            ('91c826f8-4ebb-4557-b2c5-b8b071dc99a8', 'bae801cd-62f3-42b3-b5c1-9312ad8e0929', '2023-09-07 19:45:14.907+05:30'),
            ('e6d8c29d-8f89-445d-9c52-710a81da6ff6', 'bae801cd-62f3-42b3-b5c1-9312ad8e0929', '2023-09-07 19:45:28.054+05:30'),
            ('70184f31-eaef-4cb3-9968-d04560739377', 'bae801cd-62f3-42b3-b5c1-9312ad8e0929', '2023-09-07 19:45:42.423+05:30'),
            ('94c73daa-9c8c-4114-a011-0a9792c4b987', '785bd2a7-d0dc-44d7-b9a2-8bc56adeaf6d', '2023-09-07 19:46:12.926+05:30'),
            ('490c9c77-a8a3-4c00-9e1a-5539466afbc1', '785bd2a7-d0dc-44d7-b9a2-8bc56adeaf6d', '2023-09-07 19:46:36.306+05:30'),
            ('6e3b1d2b-29d0-43e6-bc38-8a43a0b2cc0e', '785bd2a7-d0dc-44d7-b9a2-8bc56adeaf6d', '2023-09-07 19:46:51.477+05:30');`
    );
  } catch (err) {
    console.log(err);
  }
}

setUpMockData();
