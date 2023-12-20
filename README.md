# Creating the database for the project through PostgreSQL
* Install pgAdmin 4 during the postgres installation process or here https://www.pgadmin.org/download/.
* Create a user and set its password.
* Right click "Databases" and create a database named exactly "Hospital".

# Creating tables for the database
* Go to "Hospital" => "Schemas" => "Public"
* In "Public", right click "Tables" and click "Query Tool".
* Copy and paste this script and click "Execute/Refresh" to create "Patients" table:
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
* Copy and paste this script and click "Execute/Refresh" to create "Doctors" table:
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
* Copy and paste this script and click "Execute/Refresh" to create "Appointments" table:
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
# Running the backend
* Go to the .env file and insert the username and password of the postgres account.
* Run the command "npm install" in the terminal.
* Run the command "npm start" in the terminal.

# Requirements:
* Create 2 or more models, each with 2 or more fields
https://github.com/BrajanHalili/backend-final/blob/7ad13c3aa7c1ce1c7889eaf435cb3e76c4f6e5a6/models/Appointment.js#L3
https://github.com/BrajanHalili/backend-final/blob/7ad13c3aa7c1ce1c7889eaf435cb3e76c4f6e5a6/models/Doctor.js#L3
https://github.com/BrajanHalili/backend-final/blob/7ad13c3aa7c1ce1c7889eaf435cb3e76c4f6e5a6/models/Patient.js#L3
* 2 or models should be associated with each other
https://github.com/BrajanHalili/backend-final/blob/7ad13c3aa7c1ce1c7889eaf435cb3e76c4f6e5a6/models/Appointment.js#L4C5-L8C33
* Write routes to add new instances to each model
https://github.com/BrajanHalili/backend-final/blob/7ad13c3aa7c1ce1c7889eaf435cb3e76c4f6e5a6/routes/appointments.js#L38C1-L52C3
https://github.com/BrajanHalili/backend-final/blob/7ad13c3aa7c1ce1c7889eaf435cb3e76c4f6e5a6/routes/doctors.js#L17C1-L29C1
https://github.com/BrajanHalili/backend-final/blob/7ad13c3aa7c1ce1c7889eaf435cb3e76c4f6e5a6/routes/patients.js#L17C1-L29C3
* Write routes that returns all instances from each model
https://github.com/BrajanHalili/backend-final/blob/7ad13c3aa7c1ce1c7889eaf435cb3e76c4f6e5a6/routes/appointments.js#L8C1-L14C42
https://github.com/BrajanHalili/backend-final/blob/7ad13c3aa7c1ce1c7889eaf435cb3e76c4f6e5a6/routes/doctors.js#L6C1-L13C38
https://github.com/BrajanHalili/backend-final/blob/7ad13c3aa7c1ce1c7889eaf435cb3e76c4f6e5a6/routes/patients.js#L6C1-L14C38
* Write routes that return individual instances from each model based on their IDs
https://github.com/BrajanHalili/backend-final/blob/7ad13c3aa7c1ce1c7889eaf435cb3e76c4f6e5a6/routes/appointments.js#L17C1-L25C4
https://github.com/BrajanHalili/backend-final/blob/7ad13c3aa7c1ce1c7889eaf435cb3e76c4f6e5a6/routes/doctors.js#L30C1-L38C4
https://github.com/BrajanHalili/backend-final/blob/7ad13c3aa7c1ce1c7889eaf435cb3e76c4f6e5a6/routes/patients.js#L32C1-L40C4
* Write routes to update instances in each model
https://github.com/BrajanHalili/backend-final/blob/7ad13c3aa7c1ce1c7889eaf435cb3e76c4f6e5a6/routes/appointments.js#L53C1-L72C3
https://github.com/BrajanHalili/backend-final/blob/7ad13c3aa7c1ce1c7889eaf435cb3e76c4f6e5a6/routes/doctors.js#L52C1-L71C3
https://github.com/BrajanHalili/backend-final/blob/7ad13c3aa7c1ce1c7889eaf435cb3e76c4f6e5a6/routes/patients.js#L55C1-L75C3
* Write routes to remove instances form each model, based on their IDs
https://github.com/BrajanHalili/backend-final/blob/7ad13c3aa7c1ce1c7889eaf435cb3e76c4f6e5a6/routes/appointments.js#L27C1-L36C4
https://github.com/BrajanHalili/backend-final/blob/7ad13c3aa7c1ce1c7889eaf435cb3e76c4f6e5a6/routes/doctors.js#L40C1-L49C4
https://github.com/BrajanHalili/backend-final/blob/7ad13c3aa7c1ce1c7889eaf435cb3e76c4f6e5a6/routes/patients.js#L43C1-L52C4
* Write a route that returns one instance from a model, and all instances associated with it in a different model
