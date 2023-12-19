# Creating the database for the project through PostgreSQL
* Create a database named exactly "Hospital".

## Creating tables for the database
* Go to "Hospital" => "Schemas" => "Public"
* In "Public", right click "Tables" and click "Query Tool".
* Copy and paste this script to create "Patients" table:
~~~
CREATE TABLE IF NOT EXISTS public."Patients"
  (
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    patient_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    patient_dob date NOT NULL,
    patient_sex character varying(255) COLLATE pg_catalog."default" NOT NULL,
    patient_address character varying(255) COLLATE pg_catalog."default" NOT NULL,
    patient_maritial_status character varying(255) COLLATE pg_catalog."default" NOT NULL,
    patient_phone character varying COLLATE pg_catalog."default" NOT NULL,
    patient_email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Patients_pkey" PRIMARY KEY (id)
)
~~~
* Copy and paste this script to create "Doctors" table:
~~~
CREATE TABLE IF NOT EXISTS public."Doctors"
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    doctor_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    doctor_dob date NOT NULL,
    doctor_sex character varying(255) COLLATE pg_catalog."default" NOT NULL,
    doctor_address character varying(255) COLLATE pg_catalog."default" NOT NULL,
    doctor_specialty character varying(255) COLLATE pg_catalog."default" NOT NULL,
    doctor_license_number integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Doctors_pkey" PRIMARY KEY (id)
)
~~~
* Copy and paste this script to create "Appointments" table:
~~~
CREATE TABLE IF NOT EXISTS public."Appointments"
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    patient_id integer NOT NULL,
    doctor_id integer NOT NULL,
    patient_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    doctor_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    appointment_date date NOT NULL,
    appointment_time time without time zone NOT NULL,
    appointment_reason character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Appointments_pkey" PRIMARY KEY (id),
    CONSTRAINT doctor_id FOREIGN KEY (doctor_id)
        REFERENCES public."Doctors" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT patient_id FOREIGN KEY (patient_id)
        REFERENCES public."Patients" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
~~~
* Go to the .env file and insert the username and password of the postgres account.
* Type "npm start" in the terminal.
