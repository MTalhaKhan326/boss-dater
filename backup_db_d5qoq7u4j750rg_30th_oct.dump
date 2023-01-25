--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: heroku_ext; Type: SCHEMA; Schema: -; Owner: ueaqu3bk6imjkt
--

CREATE SCHEMA heroku_ext;


ALTER SCHEMA heroku_ext OWNER TO ueaqu3bk6imjkt;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: vyfkwzvwxlveon
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO vyfkwzvwxlveon;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Blocks; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public."Blocks" (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "from" integer NOT NULL,
    against integer NOT NULL
);


ALTER TABLE public."Blocks" OWNER TO vyfkwzvwxlveon;

--
-- Name: Blocks_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public."Blocks_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public."Blocks_id_seq" OWNER TO vyfkwzvwxlveon;

--
-- Name: Blocks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public."Blocks_id_seq" OWNED BY public."Blocks".id;


--
-- Name: BodyTypes; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public."BodyTypes" (
    id integer NOT NULL,
    name text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."BodyTypes" OWNER TO vyfkwzvwxlveon;

--
-- Name: BodyTypes_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public."BodyTypes_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public."BodyTypes_id_seq" OWNER TO vyfkwzvwxlveon;

--
-- Name: BodyTypes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public."BodyTypes_id_seq" OWNED BY public."BodyTypes".id;


--
-- Name: Children; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public."Children" (
    id integer NOT NULL,
    name text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Children" OWNER TO vyfkwzvwxlveon;

--
-- Name: Children_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public."Children_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public."Children_id_seq" OWNER TO vyfkwzvwxlveon;

--
-- Name: Children_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public."Children_id_seq" OWNED BY public."Children".id;


--
-- Name: Education; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public."Education" (
    id integer NOT NULL,
    name text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Education" OWNER TO vyfkwzvwxlveon;

--
-- Name: Education_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public."Education_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public."Education_id_seq" OWNER TO vyfkwzvwxlveon;

--
-- Name: Education_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public."Education_id_seq" OWNED BY public."Education".id;


--
-- Name: EmailVerificationTokens; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public."EmailVerificationTokens" (
    id integer NOT NULL,
    token character varying(255) NOT NULL,
    "expiresIn" timestamp with time zone NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer
);


ALTER TABLE public."EmailVerificationTokens" OWNER TO vyfkwzvwxlveon;

--
-- Name: EmailVerificationTokens_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public."EmailVerificationTokens_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public."EmailVerificationTokens_id_seq" OWNER TO vyfkwzvwxlveon;

--
-- Name: EmailVerificationTokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public."EmailVerificationTokens_id_seq" OWNED BY public."EmailVerificationTokens".id;


--
-- Name: Ethnicities; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public."Ethnicities" (
    id integer NOT NULL,
    name text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Ethnicities" OWNER TO vyfkwzvwxlveon;

--
-- Name: Ethnicities_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public."Ethnicities_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public."Ethnicities_id_seq" OWNER TO vyfkwzvwxlveon;

--
-- Name: Ethnicities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public."Ethnicities_id_seq" OWNED BY public."Ethnicities".id;


--
-- Name: ForgotPasswordTokens; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public."ForgotPasswordTokens" (
    id integer NOT NULL,
    token character varying(255) NOT NULL,
    "expiresIn" timestamp with time zone NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer
);


ALTER TABLE public."ForgotPasswordTokens" OWNER TO vyfkwzvwxlveon;

--
-- Name: ForgotPasswordTokens_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public."ForgotPasswordTokens_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public."ForgotPasswordTokens_id_seq" OWNER TO vyfkwzvwxlveon;

--
-- Name: ForgotPasswordTokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public."ForgotPasswordTokens_id_seq" OWNED BY public."ForgotPasswordTokens".id;


--
-- Name: HairColors; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public."HairColors" (
    id integer NOT NULL,
    name text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."HairColors" OWNER TO vyfkwzvwxlveon;

--
-- Name: HairColors_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public."HairColors_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public."HairColors_id_seq" OWNER TO vyfkwzvwxlveon;

--
-- Name: HairColors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public."HairColors_id_seq" OWNED BY public."HairColors".id;


--
-- Name: Likes; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public."Likes" (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "from" integer NOT NULL,
    "to" integer NOT NULL
);


ALTER TABLE public."Likes" OWNER TO vyfkwzvwxlveon;

--
-- Name: Likes_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public."Likes_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public."Likes_id_seq" OWNER TO vyfkwzvwxlveon;

--
-- Name: Likes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public."Likes_id_seq" OWNED BY public."Likes".id;


--
-- Name: Occupations; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public."Occupations" (
    id integer NOT NULL,
    name text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    gender character varying(255)
);


ALTER TABLE public."Occupations" OWNER TO vyfkwzvwxlveon;

--
-- Name: Occupations_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public."Occupations_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public."Occupations_id_seq" OWNER TO vyfkwzvwxlveon;

--
-- Name: Occupations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public."Occupations_id_seq" OWNED BY public."Occupations".id;


--
-- Name: RelationshipStatuses; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public."RelationshipStatuses" (
    id integer NOT NULL,
    name text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."RelationshipStatuses" OWNER TO vyfkwzvwxlveon;

--
-- Name: RelationshipStatuses_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public."RelationshipStatuses_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public."RelationshipStatuses_id_seq" OWNER TO vyfkwzvwxlveon;

--
-- Name: RelationshipStatuses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public."RelationshipStatuses_id_seq" OWNED BY public."RelationshipStatuses".id;


--
-- Name: Reports; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public."Reports" (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "from" integer NOT NULL,
    against integer NOT NULL,
    reason text,
    note text
);


ALTER TABLE public."Reports" OWNER TO vyfkwzvwxlveon;

--
-- Name: Reports_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public."Reports_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public."Reports_id_seq" OWNER TO vyfkwzvwxlveon;

--
-- Name: Reports_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public."Reports_id_seq" OWNED BY public."Reports".id;


--
-- Name: Roles; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public."Roles" (
    id integer NOT NULL,
    role character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Roles" OWNER TO vyfkwzvwxlveon;

--
-- Name: Roles_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public."Roles_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public."Roles_id_seq" OWNER TO vyfkwzvwxlveon;

--
-- Name: Roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public."Roles_id_seq" OWNED BY public."Roles".id;


--
-- Name: Tags; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public."Tags" (
    id integer NOT NULL,
    name text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Tags" OWNER TO vyfkwzvwxlveon;

--
-- Name: Tags_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public."Tags_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public."Tags_id_seq" OWNER TO vyfkwzvwxlveon;

--
-- Name: Tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public."Tags_id_seq" OWNED BY public."Tags".id;


--
-- Name: UserFcmTokens; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public."UserFcmTokens" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "fcmToken" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."UserFcmTokens" OWNER TO vyfkwzvwxlveon;

--
-- Name: UserFcmTokens_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public."UserFcmTokens_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public."UserFcmTokens_id_seq" OWNER TO vyfkwzvwxlveon;

--
-- Name: UserFcmTokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public."UserFcmTokens_id_seq" OWNED BY public."UserFcmTokens".id;


--
-- Name: UserPhotos; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public."UserPhotos" (
    id integer NOT NULL,
    photo character varying(255),
    "profilePhoto" boolean,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public."UserPhotos" OWNER TO vyfkwzvwxlveon;

--
-- Name: UserPhotos_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public."UserPhotos_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public."UserPhotos_id_seq" OWNER TO vyfkwzvwxlveon;

--
-- Name: UserPhotos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public."UserPhotos_id_seq" OWNED BY public."UserPhotos".id;


--
-- Name: UserPreferences; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public."UserPreferences" (
    id integer NOT NULL,
    "lookingFor" text,
    "minAge" integer,
    "maxAge" integer,
    "minHeight" character varying(255),
    "maxHeight" character varying(255),
    "interestedIn" character varying(255),
    "netWorth" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "relationshipStatusId" integer,
    "bodyTypeId" integer,
    "ethnicityId" integer,
    "hairColorId" integer,
    "educationId" integer,
    "childrenId" integer,
    "userId" integer,
    "occupationId" integer
);


ALTER TABLE public."UserPreferences" OWNER TO vyfkwzvwxlveon;

--
-- Name: UserPreferences_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public."UserPreferences_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public."UserPreferences_id_seq" OWNER TO vyfkwzvwxlveon;

--
-- Name: UserPreferences_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public."UserPreferences_id_seq" OWNED BY public."UserPreferences".id;


--
-- Name: UserProfiles; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public."UserProfiles" (
    id integer NOT NULL,
    career text,
    skills text,
    "travelingSpot" text,
    "aboutMe" text,
    "lookingFor" text,
    height integer,
    "heightUnit" character varying(255) DEFAULT 'cm'::character varying,
    latitude character varying(255),
    longitude character varying(255),
    "jobTitle" character varying(255),
    linkedin text,
    "netWorth" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer,
    "bodyTypeId" integer,
    "ethnicityId" integer,
    "hairColorId" integer,
    "educationId" integer,
    "childrenId" integer,
    "occupationId" integer,
    "relationshipStatusId" integer,
    "recentLatitude" character varying(255) DEFAULT NULL::character varying,
    "recentLongitude" character varying(255) DEFAULT NULL::character varying
);


ALTER TABLE public."UserProfiles" OWNER TO vyfkwzvwxlveon;

--
-- Name: UserProfiles_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public."UserProfiles_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public."UserProfiles_id_seq" OWNER TO vyfkwzvwxlveon;

--
-- Name: UserProfiles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public."UserProfiles_id_seq" OWNED BY public."UserProfiles".id;


--
-- Name: UserStatuses; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public."UserStatuses" (
    id integer NOT NULL,
    status character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public."UserStatuses" OWNER TO vyfkwzvwxlveon;

--
-- Name: UserStatuses_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public."UserStatuses_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public."UserStatuses_id_seq" OWNER TO vyfkwzvwxlveon;

--
-- Name: UserStatuses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public."UserStatuses_id_seq" OWNED BY public."UserStatuses".id;


--
-- Name: UserTags; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public."UserTags" (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userPreferenceId" integer,
    "tagId" integer
);


ALTER TABLE public."UserTags" OWNER TO vyfkwzvwxlveon;

--
-- Name: UserTags_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public."UserTags_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public."UserTags_id_seq" OWNER TO vyfkwzvwxlveon;

--
-- Name: UserTags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public."UserTags_id_seq" OWNED BY public."UserTags".id;


--
-- Name: Users; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    gender character varying(255),
    "phoneNumber" character varying(255),
    email character varying(255),
    password character varying(255),
    "birthDate" date,
    "emailVerifiedAt" timestamp with time zone,
    "phoneVerifiedAt" timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deletedAt" timestamp with time zone,
    name character varying(255),
    "isDisabled" boolean DEFAULT false,
    "facebookId" character varying(255),
    "googleId" character varying(255),
    "appleId" character varying(255),
    "deviceToken" text,
    "profileCompletionPercentage" integer DEFAULT 25,
    "showWhenViewSomeOne" boolean DEFAULT true,
    "onlineStatus" boolean DEFAULT true,
    "showRecentLocation" boolean DEFAULT true,
    "showInSearch" boolean DEFAULT true,
    "showWhenViewSomeone" boolean DEFAULT true,
    "showFavouritedOne" boolean DEFAULT true,
    "joiningDate" boolean DEFAULT true,
    "someoneSendMeMessage" boolean DEFAULT true,
    "someoneFavouritedMe" boolean DEFAULT true
);


ALTER TABLE public."Users" OWNER TO vyfkwzvwxlveon;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public."Users_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO vyfkwzvwxlveon;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: Views; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public."Views" (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "from" integer NOT NULL,
    "to" integer NOT NULL
);


ALTER TABLE public."Views" OWNER TO vyfkwzvwxlveon;

--
-- Name: Views_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public."Views_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


ALTER TABLE public."Views_id_seq" OWNER TO vyfkwzvwxlveon;

--
-- Name: Views_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public."Views_id_seq" OWNED BY public."Views".id;


--
-- Name: user_searches; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public.user_searches (
    id integer NOT NULL,
    user_id integer NOT NULL,
    search_name character varying(50) NOT NULL,
    gps boolean DEFAULT false,
    other_location boolean DEFAULT false,
    location_by_city_state boolean DEFAULT false,
    occupations integer[],
    job_title character varying(50),
    min_distance integer DEFAULT 0,
    max_distannce integer DEFAULT 0,
    min_net_worth integer DEFAULT 0,
    max_net_worth integer DEFAULT 0,
    currency character varying(20),
    viewed_me boolean DEFAULT false,
    unviewed boolean DEFAULT false,
    favorited boolean DEFAULT false,
    favorited_me boolean DEFAULT false,
    min_prefered_age integer DEFAULT 0,
    max_prefered_age integer DEFAULT 0,
    min_height integer DEFAULT 0,
    max_height integer DEFAULT 0,
    body_types integer[],
    hair_colors integer[],
    relationship_statuses integer[],
    education integer[],
    childrens integer[],
    show_members_seeking integer[],
    do_not_show_members_seeking integer[],
    createdat timestamp without time zone NOT NULL,
    updatedat timestamp without time zone NOT NULL
);


ALTER TABLE public.user_searches OWNER TO vyfkwzvwxlveon;

--
-- Name: user_searches_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public.user_searches_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_searches_id_seq OWNER TO vyfkwzvwxlveon;

--
-- Name: user_searches_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public.user_searches_id_seq OWNED BY public.user_searches.id;


--
-- Name: usersearches; Type: TABLE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE TABLE public.usersearches (
    id integer NOT NULL,
    user_id integer NOT NULL,
    search_name character varying(50) NOT NULL,
    gps boolean DEFAULT false,
    other_location boolean DEFAULT false,
    location_by_city_state boolean DEFAULT false,
    occupations integer[],
    job_title character varying(50),
    min_distance integer DEFAULT 0,
    max_distannce integer DEFAULT 0,
    min_net_worth integer DEFAULT 0,
    max_net_worth integer DEFAULT 0,
    currency character varying(20),
    viewed_me boolean DEFAULT false,
    unviewed boolean DEFAULT false,
    favorited boolean DEFAULT false,
    favorited_me boolean DEFAULT false,
    min_prefered_age integer DEFAULT 0,
    max_prefered_age integer DEFAULT 0,
    min_height integer DEFAULT 0,
    max_height integer DEFAULT 0,
    body_types integer[],
    hair_colors integer[],
    relationship_statuses integer[],
    education integer[],
    childrens integer[],
    show_members_seeking integer[],
    do_not_show_members_seeking integer[],
    createdat timestamp without time zone NOT NULL,
    updatedat timestamp without time zone NOT NULL
);


ALTER TABLE public.usersearches OWNER TO vyfkwzvwxlveon;

--
-- Name: usersearches_id_seq; Type: SEQUENCE; Schema: public; Owner: vyfkwzvwxlveon
--

CREATE SEQUENCE public.usersearches_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usersearches_id_seq OWNER TO vyfkwzvwxlveon;

--
-- Name: usersearches_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER SEQUENCE public.usersearches_id_seq OWNED BY public.usersearches.id;


--
-- Name: Blocks id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Blocks" ALTER COLUMN id SET DEFAULT nextval('public."Blocks_id_seq"'::regclass);


--
-- Name: BodyTypes id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."BodyTypes" ALTER COLUMN id SET DEFAULT nextval('public."BodyTypes_id_seq"'::regclass);


--
-- Name: Children id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Children" ALTER COLUMN id SET DEFAULT nextval('public."Children_id_seq"'::regclass);


--
-- Name: Education id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Education" ALTER COLUMN id SET DEFAULT nextval('public."Education_id_seq"'::regclass);


--
-- Name: EmailVerificationTokens id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."EmailVerificationTokens" ALTER COLUMN id SET DEFAULT nextval('public."EmailVerificationTokens_id_seq"'::regclass);


--
-- Name: Ethnicities id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Ethnicities" ALTER COLUMN id SET DEFAULT nextval('public."Ethnicities_id_seq"'::regclass);


--
-- Name: ForgotPasswordTokens id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."ForgotPasswordTokens" ALTER COLUMN id SET DEFAULT nextval('public."ForgotPasswordTokens_id_seq"'::regclass);


--
-- Name: HairColors id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."HairColors" ALTER COLUMN id SET DEFAULT nextval('public."HairColors_id_seq"'::regclass);


--
-- Name: Likes id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Likes" ALTER COLUMN id SET DEFAULT nextval('public."Likes_id_seq"'::regclass);


--
-- Name: Occupations id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Occupations" ALTER COLUMN id SET DEFAULT nextval('public."Occupations_id_seq"'::regclass);


--
-- Name: RelationshipStatuses id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."RelationshipStatuses" ALTER COLUMN id SET DEFAULT nextval('public."RelationshipStatuses_id_seq"'::regclass);


--
-- Name: Reports id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Reports" ALTER COLUMN id SET DEFAULT nextval('public."Reports_id_seq"'::regclass);


--
-- Name: Roles id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Roles" ALTER COLUMN id SET DEFAULT nextval('public."Roles_id_seq"'::regclass);


--
-- Name: Tags id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Tags" ALTER COLUMN id SET DEFAULT nextval('public."Tags_id_seq"'::regclass);


--
-- Name: UserFcmTokens id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserFcmTokens" ALTER COLUMN id SET DEFAULT nextval('public."UserFcmTokens_id_seq"'::regclass);


--
-- Name: UserPhotos id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserPhotos" ALTER COLUMN id SET DEFAULT nextval('public."UserPhotos_id_seq"'::regclass);


--
-- Name: UserPreferences id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserPreferences" ALTER COLUMN id SET DEFAULT nextval('public."UserPreferences_id_seq"'::regclass);


--
-- Name: UserProfiles id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserProfiles" ALTER COLUMN id SET DEFAULT nextval('public."UserProfiles_id_seq"'::regclass);


--
-- Name: UserStatuses id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserStatuses" ALTER COLUMN id SET DEFAULT nextval('public."UserStatuses_id_seq"'::regclass);


--
-- Name: UserTags id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserTags" ALTER COLUMN id SET DEFAULT nextval('public."UserTags_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Name: Views id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Views" ALTER COLUMN id SET DEFAULT nextval('public."Views_id_seq"'::regclass);


--
-- Name: user_searches id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public.user_searches ALTER COLUMN id SET DEFAULT nextval('public.user_searches_id_seq'::regclass);


--
-- Name: usersearches id; Type: DEFAULT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public.usersearches ALTER COLUMN id SET DEFAULT nextval('public.usersearches_id_seq'::regclass);


--
-- Data for Name: Blocks; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public."Blocks" (id, "createdAt", "updatedAt", "from", against) FROM stdin;
1	2022-03-14 11:06:41.404+00	2022-03-14 11:06:41.404+00	2	1
5	2022-10-20 14:26:08.295+00	2022-10-20 14:26:08.295+00	37	6
6	2022-10-22 20:50:42.239+00	2022-10-22 20:50:42.239+00	47	6
7	2022-10-26 18:32:24.754+00	2022-10-26 18:32:24.754+00	56	53
8	2022-10-28 05:13:53.205+00	2022-10-28 05:13:53.205+00	56	58
9	2022-10-28 05:14:55.085+00	2022-10-28 05:14:55.085+00	56	57
10	2022-10-28 05:15:18.598+00	2022-10-28 05:15:18.598+00	56	60
11	2022-10-28 10:30:28.265+00	2022-10-28 10:30:28.265+00	47	55
12	2022-10-28 14:36:10.753+00	2022-10-28 14:36:10.753+00	56	61
\.


--
-- Data for Name: BodyTypes; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public."BodyTypes" (id, name, "createdAt", "updatedAt") FROM stdin;
1	Slim	2022-03-11 10:27:56.001+00	2022-03-11 10:27:56.001+00
2	Athletic	2022-03-11 10:27:56.001+00	2022-03-11 10:27:56.001+00
3	Curvy	2022-03-11 10:27:56.001+00	2022-03-11 10:27:56.001+00
4	Healthy	2022-03-11 10:27:56.001+00	2022-03-11 10:27:56.001+00
5	Other	2022-03-11 10:27:56.001+00	2022-03-11 10:27:56.001+00
\.


--
-- Data for Name: Children; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public."Children" (id, name, "createdAt", "updatedAt") FROM stdin;
1	No Kids	2022-03-11 10:27:55.988+00	2022-03-11 10:27:55.988+00
2	Expecting	2022-03-11 10:27:55.988+00	2022-03-11 10:27:55.988+00
3	New Parent	2022-03-11 10:27:55.988+00	2022-03-11 10:27:55.988+00
4	Toddlers	2022-03-11 10:27:55.988+00	2022-03-11 10:27:55.988+00
5	Other	2022-03-11 10:27:55.988+00	2022-03-11 10:27:55.988+00
\.


--
-- Data for Name: Education; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public."Education" (id, name, "createdAt", "updatedAt") FROM stdin;
1	High School	2022-03-11 10:27:56.016+00	2022-03-11 10:27:56.016+00
2	College	2022-03-11 10:27:56.016+00	2022-03-11 10:27:56.016+00
3	University	2022-03-11 10:27:56.016+00	2022-03-11 10:27:56.016+00
4	PHD	2022-03-11 10:27:56.016+00	2022-03-11 10:27:56.016+00
5	Attorney	2022-03-11 10:27:56.016+00	2022-03-11 10:27:56.016+00
\.


--
-- Data for Name: EmailVerificationTokens; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public."EmailVerificationTokens" (id, token, "expiresIn", "createdAt", "updatedAt", "userId") FROM stdin;
2	76c6b1efb701142862e9fe7b2b558ef667b3e7a769453b7100e369bc7d526596	2022-03-30 08:00:16.229+00	2022-03-30 07:50:16.232+00	2022-03-30 07:50:16.232+00	6
3	cf830153793c89f335238980bb4b0aa3214c8189a45ff5c8700195fdd73ecccb	2022-03-30 10:12:27.409+00	2022-03-30 10:02:28.559+00	2022-03-30 10:02:28.559+00	\N
4	19eeffc3c1eb7dd8e27c9781feceeb02e6d6153f9f257899ca0b1bcfbe436b20	2022-03-30 10:15:25.176+00	2022-03-30 10:05:25.906+00	2022-03-30 10:05:25.906+00	\N
5	14326baf59373fee76fa43e4599bccab8aca306b19090abb32d50d09a5ab47f8	2022-03-30 10:27:12.858+00	2022-03-30 10:17:12.859+00	2022-03-30 10:17:12.859+00	\N
7	c24703aeed68217acf9520dddea6b3673e11e493dde7d6944bcaac0bd3a14448	2022-10-04 12:32:51.595+00	2022-10-04 12:22:51.598+00	2022-10-04 12:22:51.598+00	23
8	d2642c5b5a666062774a9d2834fbbb4aa0d669cfc4342e288f37bf2c5c58bb5f	2022-10-04 12:33:22.564+00	2022-10-04 12:23:22.564+00	2022-10-04 12:23:22.564+00	\N
9	758977412c116fb915f655458b71ade0a6dc242da40944d6eeb2abc5e30b81dc	2022-10-17 04:51:50.956+00	2022-10-17 04:41:50.957+00	2022-10-17 04:41:50.957+00	\N
10	524beeec873cb78924f03e60f2b9a7313873df5881f0654eaead2d581336e643	2022-10-17 04:52:49.486+00	2022-10-17 04:42:49.486+00	2022-10-17 04:42:49.486+00	\N
11	bef1552cfd69363c11d4cfc3377ce60e19cb38dc5b4a62b0eed5cf7387d3dc37	2022-10-17 04:53:22.504+00	2022-10-17 04:43:22.504+00	2022-10-17 04:43:22.504+00	\N
12	e2868eed331751cb9b25391c47df29597e2d5579068a46b7f989e521bdd3499b	2022-10-17 04:53:53.184+00	2022-10-17 04:43:53.184+00	2022-10-17 04:43:53.184+00	\N
13	297ffbe239f4c696484aea660cf99955ce3632bbb3bcc40ca2e42bd28286b48f	2022-10-17 06:44:59.74+00	2022-10-17 06:34:59.74+00	2022-10-17 06:34:59.74+00	\N
14	94c1127ab5e9e955e88cd4add474cb9279dc422b58f1048ff5be35232fde0589	2022-10-20 05:24:15.838+00	2022-10-20 05:14:15.839+00	2022-10-20 05:14:15.839+00	\N
15	52a55057b498b3aebc54d469e81142ee57ddc7abfc6d379b5e8a5c0c7a9ef820	2022-10-20 13:04:59.43+00	2022-10-20 12:54:59.435+00	2022-10-20 12:54:59.435+00	\N
16	04ad14d9946a767eeb8811d45d809a17e09469aecd4ab9bed8f5fefda8f39cc0	2022-10-20 13:14:59.662+00	2022-10-20 13:04:59.667+00	2022-10-20 13:04:59.667+00	\N
17	0e652b392bbd6ab2fabe314848f97340dab6f2cc368648235f1351c9ff8bc730	2022-10-20 13:43:27.044+00	2022-10-20 13:33:27.044+00	2022-10-20 13:33:27.044+00	\N
18	3581b125128cab6e325316b96971bce7bac9402d5a817e64f2d56deb5cf23c4e	2022-10-20 13:44:45.799+00	2022-10-20 13:34:45.799+00	2022-10-20 13:34:45.799+00	\N
19	d3a5200984de637d19063650460a15e19d3045fc0b1cc251db185424f5b2455c	2022-10-20 13:45:06.536+00	2022-10-20 13:35:06.537+00	2022-10-20 13:35:06.537+00	\N
20	5b359f5fc2b1cbba1068814539ed753d35550c46d258dbe1e9ef9283018acc27	2022-10-20 14:03:25.91+00	2022-10-20 13:53:25.91+00	2022-10-20 13:53:25.91+00	\N
21	578d3d09792db006003010b521e37525c4c01cc6490c176f61e089cbb63aebe1	2022-10-20 14:04:51.039+00	2022-10-20 13:54:51.039+00	2022-10-20 13:54:51.039+00	\N
22	8656fa7508199018142ffdd35da58ead88ab20db3c00dddf633fc842dddb41b7	2022-10-20 14:20:05.359+00	2022-10-20 14:10:05.363+00	2022-10-20 14:10:05.363+00	\N
23	0d21ae129a64e1d19e4a94dfca3a67c777e17374e9d4ca2f74b65647a88119ea	2022-10-20 14:25:24.249+00	2022-10-20 14:15:24.249+00	2022-10-20 14:15:24.249+00	\N
24	ce157a63c5af6bc69d076f5cc7acd1c18a8b44933f907e682f24914a63e9939e	2022-10-21 06:16:20.301+00	2022-10-21 06:06:20.303+00	2022-10-21 06:06:20.303+00	\N
25	b996521be9c996db3560ca234a56286ac38f798d34be229437555fab4f12a6a5	2022-10-21 06:18:19.662+00	2022-10-21 06:08:19.671+00	2022-10-21 06:08:19.671+00	\N
26	44db4e7dd7d675378fce1f9272c0fe44d428b75eb16101d53b88155a39d4aaf8	2022-10-21 06:20:02.027+00	2022-10-21 06:10:02.027+00	2022-10-21 06:10:02.027+00	\N
27	1a67316dfbb24cbd5a17450aa53cd9ae42cdc7b1f58d06ec71bdcf2c9ad1fb28	2022-10-21 06:50:27.124+00	2022-10-21 06:40:27.125+00	2022-10-21 06:40:27.125+00	\N
28	0bb96d87216f5159d997d566969931579a74f4fcd81e9e4280e5354a4ba0c2fd	2022-10-21 07:20:47.684+00	2022-10-21 07:10:47.685+00	2022-10-21 07:10:47.685+00	\N
29	4c61a70becbc2a160646dc8928b718d02ecf2b980e505c2fe9d82759c177befd	2022-10-21 07:21:20.685+00	2022-10-21 07:11:20.685+00	2022-10-21 07:11:20.685+00	\N
30	6da3125ed2a5bc8715fd17db4bade4cd98194d271bbdb278cb1131021f6ade81	2022-10-21 07:43:21.944+00	2022-10-21 07:33:21.945+00	2022-10-21 07:33:21.945+00	\N
31	9a1b6288c1d0bb97708744bc0d5f778060a6aee66bd4e2abc670007bebf6f84f	2022-10-21 07:46:05.883+00	2022-10-21 07:36:05.884+00	2022-10-21 07:36:05.884+00	\N
32	d2fd3bb387a840ba902e32de60e7ec1f8ca9a417d61163164ae2b6c1a78c1f30	2022-10-21 07:46:48.422+00	2022-10-21 07:36:48.422+00	2022-10-21 07:36:48.422+00	\N
33	8eff417a0ed7bc3b2a435429792565649ff3baa519aa6640a260fe43788a23cf	2022-10-21 10:20:56.601+00	2022-10-21 10:10:56.602+00	2022-10-21 10:10:56.602+00	\N
34	a3de3fd43a0ae76e184e7c989f7ea9a118cf9315879e80926c9e4a672308f7e5	2022-10-21 11:16:51.694+00	2022-10-21 11:06:51.694+00	2022-10-21 11:06:51.694+00	\N
35	8ead779ed58cd4375cbb6471c09bbb8540eab86c0a2411b26a94f8b063c26477	2022-10-21 11:18:10.245+00	2022-10-21 11:08:10.245+00	2022-10-21 11:08:10.245+00	\N
36	5325302e6a26d6e63f0988d276af9e618e78b9997c4893665618fce15af0fff3	2022-10-21 11:19:22.132+00	2022-10-21 11:09:22.132+00	2022-10-21 11:09:22.132+00	\N
37	ae5ca0b50c33c0b9a0dfd975f7b19efd032b0af39ed00f5bc03cc00ddba651e6	2022-10-22 12:14:26.895+00	2022-10-22 12:04:26.896+00	2022-10-22 12:04:26.896+00	\N
38	2e27bb07e506e9824ae32f9b0e2b52278c203f35cdfd04bad872f45fa4831a1d	2022-10-22 12:16:42.118+00	2022-10-22 12:06:42.118+00	2022-10-22 12:06:42.118+00	\N
39	cad6ddf10c7f185baa569652306063313da25e747d9c7c2ce29f5b1d3bd216cb	2022-10-22 12:17:49.609+00	2022-10-22 12:07:49.609+00	2022-10-22 12:07:49.609+00	\N
40	d8afe5916ab2d6c3714bce6ee8b3cff690820bbe9037fc04608bed3bb16b28de	2022-10-22 12:18:38.253+00	2022-10-22 12:08:38.253+00	2022-10-22 12:08:38.253+00	\N
41	b5aeff8acc69bc61c50b11df4b048dab5ac7b4a4c60e82f9d52fa3ba6b3719ec	2022-10-22 12:19:12.379+00	2022-10-22 12:09:12.379+00	2022-10-22 12:09:12.379+00	\N
42	9e2496ce96a83f10f1366352dd38744be68466a85fd4b100686534325d57ffdf	2022-10-26 14:30:04.297+00	2022-10-26 14:20:04.298+00	2022-10-26 14:20:04.298+00	\N
43	02141810795aab0ec079efd12dab0579c39695cbd7598c93ead45180f7f5d2ad	2022-10-26 17:53:43.922+00	2022-10-26 17:43:43.923+00	2022-10-26 17:43:43.923+00	\N
44	441df4958cb3d20cf97190ce30da5884b185e6e14cd805979b2d0f07b7907593	2022-10-27 03:56:41.689+00	2022-10-27 03:46:41.691+00	2022-10-27 03:46:41.691+00	\N
45	8c03c4a3cde9ff15d02fc0bb9f53ae40e21cda650b6a75dad4e69de66d280994	2022-10-27 03:57:31.15+00	2022-10-27 03:47:31.15+00	2022-10-27 03:47:31.15+00	\N
46	6154e4fabee18be7f85c375955cd244130f936a96f2be29969b39bff31ebfca2	2022-10-27 04:15:29.786+00	2022-10-27 04:05:29.787+00	2022-10-27 04:05:29.787+00	\N
47	86f24e0a8f1140e3cdf50be217a8525acadebbe89fd1fc60be625880897e9be3	2022-10-27 04:15:44.593+00	2022-10-27 04:05:44.593+00	2022-10-27 04:05:44.593+00	\N
48	eb8bff7a00ba4c11dd9b5d08d6d96bea2b409ab393229a6d8dfbeba9b7c4174a	2022-10-27 05:29:50.117+00	2022-10-27 05:19:50.118+00	2022-10-27 05:19:50.118+00	\N
49	8a376a996f6d7e958bbd68a87649296ea289ed2880de8b358cb91fa06aa3dfc6	2022-10-27 06:28:53.524+00	2022-10-27 06:18:53.525+00	2022-10-27 06:18:53.525+00	\N
50	5805921783d4f48c7ddacf69382814a769b81b318735bc11ea309b2fa4e5a47b	2022-10-27 06:29:20.956+00	2022-10-27 06:19:20.956+00	2022-10-27 06:19:20.956+00	\N
51	0b36980af5c0346a818b88693526bc0deb1e8ed19cba03824cc6db1110c331db	2022-10-27 06:40:25.109+00	2022-10-27 06:30:25.109+00	2022-10-27 06:30:25.109+00	\N
52	346f05a48032ec2d7b1c7eb248654175cba8b58c611c01aff5a6673a1fe0a7cd	2022-10-27 07:04:15.591+00	2022-10-27 06:54:15.591+00	2022-10-27 06:54:15.591+00	\N
53	3b96b9d2dc7cd7d338d73571d7c46eefe383955e4427d8a2079f4c41b374d988	2022-10-28 11:54:25.624+00	2022-10-28 11:44:25.624+00	2022-10-28 11:44:25.624+00	\N
54	82555dabb53963a1730701fad953f0dd80830b06fb36b7bf5f6f27150fc136d4	2022-10-28 11:55:38.874+00	2022-10-28 11:45:38.874+00	2022-10-28 11:45:38.874+00	\N
55	945ce179d4470c09c26c16d9a41090decbb4c58b2eab8a7bf52b88d452769320	2022-10-28 12:05:24.543+00	2022-10-28 11:55:24.543+00	2022-10-28 11:55:24.543+00	\N
56	ea6dfc7c35c52fb755fe5750231ac553a3708b224b3928ac7fa0a4708a191551	2022-10-28 12:52:48.433+00	2022-10-28 12:42:48.434+00	2022-10-28 12:42:48.434+00	\N
57	f86064981e6d82e47208357c39cdbd53def24bd3a011f00140f2884059d37d8a	2022-10-28 12:53:45.152+00	2022-10-28 12:43:45.152+00	2022-10-28 12:43:45.152+00	\N
58	120e52d7b556d767ec36cded815be09600165124a3913d4586e374056f1d2f9b	2022-10-28 14:42:48.325+00	2022-10-28 14:32:48.325+00	2022-10-28 14:32:48.325+00	\N
59	28dbec0e0501d3cc564103ed9c269ef959e7c697218c4aecc9eec6cbfbf27e97	2022-10-28 14:51:51.158+00	2022-10-28 14:41:51.158+00	2022-10-28 14:41:51.158+00	\N
60	c37fd5582393747ef03b83ad095a5650d2f5335acc65eaa7db54c4b2a21d1092	2022-10-28 15:37:47.515+00	2022-10-28 15:27:47.516+00	2022-10-28 15:27:47.516+00	\N
61	b8b2994c7b8b89680041f24fbb0d10dc76e072cbefb1a342fb3d7cf4b002bec6	2022-10-29 07:23:41.043+00	2022-10-29 07:13:41.044+00	2022-10-29 07:13:41.044+00	\N
62	2e2195595695ad1b86da7180e2921842c9434740987dcfec23c51c0506acc3b3	2022-10-29 07:25:13.688+00	2022-10-29 07:15:13.688+00	2022-10-29 07:15:13.688+00	\N
63	6686fc4c74906865248b0f2fcf5c246709215eda68cab15f8a70bb2e63f5bf7d	2022-10-29 07:32:47.352+00	2022-10-29 07:22:47.354+00	2022-10-29 07:22:47.354+00	\N
64	3f7e05acc03b0893efd9bbb4990cd9d20b1451ab549633510c427f96c40e7143	2022-10-29 08:02:56.878+00	2022-10-29 07:52:56.881+00	2022-10-29 07:52:56.881+00	\N
65	d26a091bf29c58cb3e7884cf6bd339c63c37482b2ce60a069b61cd746f61d2ac	2022-10-29 08:07:21.491+00	2022-10-29 07:57:21.494+00	2022-10-29 07:57:21.494+00	\N
66	ddfba1616217aeef6b37573021f3b76e952c8e80895f5bd975db3d9e1bcf64d8	2022-10-29 08:14:49.641+00	2022-10-29 08:04:49.642+00	2022-10-29 08:04:49.642+00	\N
67	16f5fa5ce97e1f40489a2fde3bb4dfb69dc4d621a42a0dc85a942d01570c30b1	2022-10-29 08:15:00.188+00	2022-10-29 08:05:00.188+00	2022-10-29 08:05:00.188+00	\N
68	81aacf180df34c201f6a2e365d48ff3e2881985e51514703f1938e2901318a52	2022-10-29 08:22:50.446+00	2022-10-29 08:12:50.446+00	2022-10-29 08:12:50.446+00	\N
69	6c4c237fa6808f1c64a0a64254a296c0b006ede809a804447cd6dc06b46cb192	2022-10-29 08:23:35.771+00	2022-10-29 08:13:35.774+00	2022-10-29 08:13:35.774+00	\N
70	edd947dc077436411469ff7f25074124f6e81a27f447afee19b59bae03ac597e	2022-10-29 18:07:43.271+00	2022-10-29 17:57:43.272+00	2022-10-29 17:57:43.272+00	\N
71	584fe3ebcd9ffe877d01df72adc22df13fa0f56324c34a24dafad7c3f5eca7d2	2022-10-29 22:39:05.988+00	2022-10-29 22:29:05.989+00	2022-10-29 22:29:05.989+00	\N
\.


--
-- Data for Name: Ethnicities; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public."Ethnicities" (id, name, "createdAt", "updatedAt") FROM stdin;
1	Native American	2022-03-11 10:27:56.008+00	2022-03-11 10:27:56.008+00
2	Black/African Dependent	2022-03-11 10:27:56.008+00	2022-03-11 10:27:56.008+00
3	African	2022-03-11 10:27:56.008+00	2022-03-11 10:27:56.008+00
4	Mixed	2022-03-11 10:27:56.008+00	2022-03-11 10:27:56.008+00
5	Pacific Islander	2022-03-11 10:27:56.008+00	2022-03-11 10:27:56.008+00
6	White Caucasian	2022-03-11 10:27:56.008+00	2022-03-11 10:27:56.008+00
7	East Indian	2022-03-11 10:27:56.008+00	2022-03-11 10:27:56.008+00
\.


--
-- Data for Name: ForgotPasswordTokens; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public."ForgotPasswordTokens" (id, token, "expiresIn", "createdAt", "updatedAt", "userId") FROM stdin;
1	6cd9994a30f93ac0a0d6b11b4cc5dea1041d96c6c5f9e6d55129be8ce1ced7cf	2022-03-28 10:43:15.139+00	2022-03-28 10:33:19.371+00	2022-03-28 10:33:19.371+00	\N
2	93d1055a100438f9b4ea42d83ac5cc9ef1e167c07e65a51faa5afb7d51a7e8ed	2022-03-28 10:47:00.899+00	2022-03-28 10:37:02.153+00	2022-03-28 10:37:02.153+00	\N
3	b3ceea0147fc1a8f17b69641c39b2c5245f63b1bf509fc574fff7184bdd8a430	2022-03-28 10:58:43.032+00	2022-03-28 10:48:43.033+00	2022-03-28 10:48:43.033+00	\N
4	b8591502ebfdae63b20944514090247aee612f537eb12004785b92534a06e6c7	2022-03-28 11:01:48.142+00	2022-03-28 10:51:48.144+00	2022-03-28 10:51:48.144+00	\N
5	9bda5425fe493e77cf97b6a568f2725c1c3b4d5cc89676507495f0ef7bc39826	2022-03-28 11:02:21.823+00	2022-03-28 10:52:21.826+00	2022-03-28 10:52:21.826+00	\N
6	92b4f1760d53c18e1dba22be05efdaaf3ac5de7af22f9c45b32de63a6b7783aa	2022-03-28 11:03:12.388+00	2022-03-28 10:53:12.394+00	2022-03-28 10:53:12.394+00	\N
7	0914fa56fe2ef38e271df2b46bbb8a8215253fec9e4060cea7c8c4640770ec03	2022-03-28 11:03:37.033+00	2022-03-28 10:53:37.034+00	2022-03-28 10:53:37.034+00	\N
8	0038263cc90dfa55d621a6425e46020136a318d12b974340f518892a6ef690ff	2022-03-28 11:04:44.949+00	2022-03-28 10:54:44.951+00	2022-03-28 10:54:44.951+00	\N
9	dab343954ef190fbbd94770762c8ce1bb0bdf248624cf19d7b1530162796dfd7	2022-03-28 11:05:56.415+00	2022-03-28 10:55:56.416+00	2022-03-28 10:55:56.416+00	\N
10	34492ccf137c7013718b58279ae39be0371b132e1deb07daf3c34a2e383f2ca5	2022-03-28 11:07:30.044+00	2022-03-28 10:57:30.046+00	2022-03-28 10:57:30.046+00	\N
11	858bb8793f4f3d4940c52954f14d2dcce1091c77fc2b64da7ba9b1c18bf4d8ef	2022-03-28 11:09:01.245+00	2022-03-28 10:59:01.249+00	2022-03-28 10:59:01.249+00	\N
12	8ea4a0b9ec3f6786b25f4d5a4be2a1930e6df0dbcabe8680a28b37a757281540	2022-03-28 11:09:30.887+00	2022-03-28 10:59:30.888+00	2022-03-28 10:59:30.888+00	\N
13	3f5aacf34834438f0a0de1cdc2bd1ef20c1fe0de8c6db5d95bca448e291aa70b	2022-03-28 11:09:42.27+00	2022-03-28 10:59:42.271+00	2022-03-28 10:59:42.271+00	\N
14	2315ff4eb5665693ee0b77d6ebdabbe89ca51ee313ab97158820af54f2661c8a	2022-03-28 11:10:39.909+00	2022-03-28 11:00:39.91+00	2022-03-28 11:00:39.91+00	\N
15	d74fcf46a4af88693677ffbae439c79aef55724555b80e61e5ee12a7c9fd05d9	2022-03-28 11:16:07.596+00	2022-03-28 11:06:07.599+00	2022-03-28 11:06:07.599+00	\N
16	379864d3b596dc530fe8afd5d13a7accad7fa70a7de1788df6c7cc3f867cdac4	2022-03-28 11:28:40.84+00	2022-03-28 11:18:40.841+00	2022-03-28 11:18:40.841+00	\N
17	167298f73bb3ecbfee3481e1d0d420e48ac3c53b52936ca8738c4170a1385cbb	2022-03-28 11:33:34.913+00	2022-03-28 11:23:34.914+00	2022-03-28 11:23:34.914+00	\N
18	0663ba1a18227e9b2b3260379dcd706b0047e88eca8eab005685ac56db94ca9a	2022-03-28 11:36:11.182+00	2022-03-28 11:26:11.185+00	2022-03-28 11:26:11.185+00	\N
19	c1c979bade25ac26ea07413d67f01911bd0651537070bf63a7b2b329af2c1047	2022-03-28 11:40:37.226+00	2022-03-28 11:30:37.229+00	2022-03-28 11:30:37.229+00	\N
20	1ca42a1c6230842663714d218824950ee39a1061003a7c2c2d4f8ea535bf8473	2022-03-28 11:44:07.946+00	2022-03-28 11:34:07.947+00	2022-03-28 11:34:07.947+00	\N
21	590a78a17e2c0b354850026d90f57c52cae597a4c0751dc77228548f67d1a182	2022-03-28 11:50:41.549+00	2022-03-28 11:40:41.55+00	2022-03-28 11:40:41.55+00	\N
22	f601774c2c37d73b8a0103f556b866bcc40a0bc9cd9aafb3ad73a0bbf81e34df	2022-03-28 11:54:45.947+00	2022-03-28 11:44:45.947+00	2022-03-28 11:44:45.947+00	\N
23	198c41080d609e444d4b6044bfd576dd0ead64b2e36672ede466d3c92d79ecbf	2022-03-28 13:08:58.886+00	2022-03-28 12:58:58.889+00	2022-03-28 12:58:58.889+00	\N
25	209be1144a28aaebb69be03ef99878aa814c11796e3e8139e18d8e401c73e427	2022-03-29 06:48:07.45+00	2022-03-29 06:38:07.452+00	2022-03-29 06:38:07.452+00	\N
24	bcc0c9cecffa1d4d27c504de8336bf5b8e01a424d42c70d0c1dd6b09565a5f3c	2022-03-29 06:28:19.825+00	2022-03-29 06:18:19.826+00	2022-03-29 06:18:19.826+00	6
28	0ee372d0a0fefa4431a2ece96d93c06f3984e8cb8d2d1c4003549e975413bf3e	2022-10-04 11:30:08.63+00	2022-10-04 11:20:08.632+00	2022-10-04 11:20:08.632+00	22
29	0d4a81d212f55a147b93d76d087644f05c9ccd15d7e39bcad9197cae707be224	2022-10-26 13:56:37.258+00	2022-10-26 13:46:10.327+00	2022-10-26 13:46:37.258+00	47
30	f47dc630419bbb41ac77fb797141a0f9718067bb9338c85f8281d5dd9d984715	2022-10-27 04:16:22.772+00	2022-10-27 04:06:22.772+00	2022-10-27 04:06:22.772+00	42
31	327d4637793ef4b06b2b8ad2e15baa945a812a59d7fbdf70fe2b5d4d8eee75b7	2022-10-27 07:08:18.745+00	2022-10-27 06:58:18.745+00	2022-10-27 06:58:18.745+00	60
\.


--
-- Data for Name: HairColors; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public."HairColors" (id, name, "createdAt", "updatedAt") FROM stdin;
1	Black	2022-03-11 10:27:55.981+00	2022-03-11 10:27:55.981+00
2	Blond	2022-03-11 10:27:55.981+00	2022-03-11 10:27:55.981+00
3	Grey	2022-03-11 10:27:55.981+00	2022-03-11 10:27:55.981+00
4	Dark Brown	2022-03-11 10:27:55.981+00	2022-03-11 10:27:55.981+00
5	Brown	2022-03-11 10:27:55.981+00	2022-03-11 10:27:55.981+00
6	Greyish Black	2022-03-11 10:27:55.981+00	2022-03-11 10:27:55.981+00
7	other	2022-03-11 10:27:55.981+00	2022-03-11 10:27:55.981+00
\.


--
-- Data for Name: Likes; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public."Likes" (id, "createdAt", "updatedAt", "from", "to") FROM stdin;
26	2022-10-23 12:00:00.779+00	2022-10-23 12:00:00.779+00	47	51
27	2022-10-23 12:15:07.931+00	2022-10-23 12:15:07.931+00	47	42
28	2022-10-24 11:54:25.539+00	2022-10-24 11:54:25.539+00	47	46
29	2022-10-24 11:54:36.255+00	2022-10-24 11:54:36.255+00	47	35
30	2022-10-25 05:27:15.657+00	2022-10-25 05:27:15.657+00	42	47
31	2022-10-26 14:33:25.718+00	2022-10-26 14:33:25.718+00	55	53
32	2022-10-26 14:42:38.688+00	2022-10-26 14:42:38.688+00	47	55
33	2022-10-26 17:56:24.619+00	2022-10-26 17:56:24.619+00	56	45
34	2022-10-26 18:18:54.459+00	2022-10-26 18:18:54.459+00	56	47
35	2022-10-26 18:33:58.729+00	2022-10-26 18:33:58.729+00	56	53
36	2022-10-27 07:09:22.983+00	2022-10-27 07:09:22.983+00	60	6
37	2022-10-27 11:44:51.381+00	2022-10-27 11:44:51.381+00	56	60
38	2022-10-28 06:14:56.568+00	2022-10-28 06:14:56.568+00	56	57
39	2022-10-28 08:02:21.782+00	2022-10-28 08:02:21.782+00	56	59
40	2022-10-28 08:35:08.007+00	2022-10-28 08:35:08.007+00	56	58
41	2022-10-28 14:36:43.042+00	2022-10-28 14:36:43.042+00	47	56
42	2022-10-29 18:06:04.86+00	2022-10-29 18:06:04.86+00	65	2
43	2022-10-29 22:39:38.419+00	2022-10-29 22:39:38.419+00	66	65
\.


--
-- Data for Name: Occupations; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public."Occupations" (id, name, "createdAt", "updatedAt", gender) FROM stdin;
1	Business Man	2022-03-22 06:47:13.082+00	2022-03-22 06:47:13.082+00	male
2	Data Science	2022-03-22 06:47:13.082+00	2022-03-22 06:47:13.082+00	male
3	Media	2022-03-22 06:47:13.082+00	2022-03-22 06:47:13.082+00	male
4	Medicine	2022-03-22 06:47:13.082+00	2022-03-22 06:47:13.082+00	male
5	other	2022-03-22 06:47:13.082+00	2022-03-22 06:47:13.082+00	male
6	student	2022-03-22 06:47:13.082+00	2022-03-22 06:47:13.082+00	female
7	Business woman	2022-03-22 06:47:13.082+00	2022-03-22 06:47:13.082+00	female
8	Media	2022-03-22 06:47:13.082+00	2022-03-22 06:47:13.082+00	female
9	Medicine	2022-03-22 06:47:13.082+00	2022-03-22 06:47:13.082+00	female
10	other	2022-03-22 06:47:13.082+00	2022-03-22 06:47:13.082+00	female
\.


--
-- Data for Name: RelationshipStatuses; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public."RelationshipStatuses" (id, name, "createdAt", "updatedAt") FROM stdin;
1	In an Open Relationship	2022-03-11 10:27:55.994+00	2022-03-11 10:27:55.994+00
2	Married but Looking	2022-03-11 10:27:55.994+00	2022-03-11 10:27:55.994+00
3	Single	2022-03-11 10:27:55.994+00	2022-03-11 10:27:55.994+00
4	Divorced	2022-03-11 10:27:55.994+00	2022-03-11 10:27:55.994+00
5	seperated	2022-03-11 10:27:55.994+00	2022-03-11 10:27:55.994+00
6	Widowed	2022-03-11 10:27:55.994+00	2022-03-11 10:27:55.994+00
7	Other	2022-03-11 10:27:55.994+00	2022-03-11 10:27:55.994+00
\.


--
-- Data for Name: Reports; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public."Reports" (id, "createdAt", "updatedAt", "from", against, reason, note) FROM stdin;
3	2022-03-28 06:47:07.299+00	2022-03-28 06:47:07.299+00	4	2	reason	note
4	2022-03-28 07:17:07.856+00	2022-03-28 07:17:07.856+00	4	3		This user is using fictional characters
5	2022-03-28 09:52:52.734+00	2022-03-28 09:52:52.734+00	3	3	s	This user is using fictional characters
7	2022-10-20 06:15:47.832+00	2022-10-20 06:15:47.832+00	39	2	Disturbing	asd
8	2022-10-21 05:15:24.038+00	2022-10-21 05:15:24.038+00	41	6	Blackmailing	asasa
9	2022-10-26 16:25:13.03+00	2022-10-26 16:25:13.03+00	42	53	Blackmailing	Test 
10	2022-10-26 16:32:40.128+00	2022-10-26 16:32:40.128+00	47	55	Disturbing	test
11	2022-10-26 16:34:03.439+00	2022-10-26 16:34:03.439+00	47	12	Blackmailing	test
12	2022-10-28 10:33:23.069+00	2022-10-28 10:33:23.069+00	47	56	Disturbing	Hsujs
13	2022-10-28 15:58:00.149+00	2022-10-28 15:58:00.149+00	47	64	Blackmailing	Bzijso
\.


--
-- Data for Name: Roles; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public."Roles" (id, role, "createdAt", "updatedAt") FROM stdin;
1	user	2022-03-11 10:27:55.605+00	2022-03-11 10:27:55.605+00
2	admin	2022-03-11 10:27:55.605+00	2022-03-11 10:27:55.605+00
\.


--
-- Data for Name: Tags; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public."Tags" (id, name, "createdAt", "updatedAt") FROM stdin;
1	Long Term	2022-10-26 12:17:35.590265+00	2022-10-26 12:17:35.590265+00
2	Dating	2022-10-26 12:18:44.638168+00	2022-10-26 12:18:44.638168+00
3	Romance	2022-10-26 12:19:03.590461+00	2022-10-26 12:19:03.590461+00
4	Travel	2022-10-26 12:19:15.543282+00	2022-10-26 12:19:15.543282+00
5	Mentorship	2022-10-26 12:19:29.964998+00	2022-10-26 12:19:29.964998+00
6	Marriage	2022-10-26 12:19:45.731482+00	2022-10-26 12:19:45.731482+00
7	Open Relation	2022-10-26 12:20:14.245433+00	2022-10-26 12:20:14.245433+00
8	Short Term	2022-10-26 12:20:26.531716+00	2022-10-26 12:20:26.531716+00
\.


--
-- Data for Name: UserFcmTokens; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public."UserFcmTokens" (id, "userId", "fcmToken", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: UserPhotos; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public."UserPhotos" (id, photo, "profilePhoto", "createdAt", "updatedAt", "userId") FROM stdin;
26	https://bossdater.s3.eu-west-1.amazonaws.com/1666852402807rn_image_picker_lib_temp_2acebaaa-5535-49fb-b273-6d9be0cad70f.jpg	\N	2022-10-27 06:33:23.175+00	2022-10-27 06:33:23.175+00	57
27	https://bossdater.s3.eu-west-1.amazonaws.com/1666852402804rn_image_picker_lib_temp_a94bc62b-0717-4269-9d39-c83a9aeb96db.jpg	\N	2022-10-27 06:33:23.382+00	2022-10-27 06:33:23.382+00	57
28	https://bossdater.s3.eu-west-1.amazonaws.com/1666853803422rn_image_picker_lib_temp_d1342bef-d275-4530-aaef-6f5cb7d79796.jpg	\N	2022-10-27 06:56:43.91+00	2022-10-27 06:56:43.91+00	60
29	https://bossdater.s3.eu-west-1.amazonaws.com/1666854868439rn_image_picker_lib_temp_8f5af563-9aac-424b-a40b-9a78c57ad6b4.jpg	\N	2022-10-27 07:14:28.883+00	2022-10-27 07:14:28.883+00	60
33	https://bossdater.s3.amazonaws.com/1666961909407rn_image_picker_lib_temp_05c502be-634a-458c-b1a9-f736c142cc73.jpg	\N	2022-10-28 12:58:30.216+00	2022-10-28 12:58:30.216+00	47
40	https://bossdater.s3.eu-west-1.amazonaws.com/1666967623161rn_image_picker_lib_temp_bf29f834-b5dc-4ed2-84b2-02211a9181c5.jpg	\N	2022-10-28 14:33:45.539+00	2022-10-28 14:33:45.539+00	56
41	https://bossdater.s3.amazonaws.com/1666967696484rn_image_picker_lib_temp_28c6c470-490f-40c3-82ba-fa5181bbc244.jpg	\N	2022-10-28 14:34:57.336+00	2022-10-28 14:34:57.336+00	63
42	https://bossdater.s3.amazonaws.com/1666972260000rn_image_picker_lib_temp_c8b1c0a8-831f-4b14-b54d-effc39285887.jpg	\N	2022-10-28 15:51:00.812+00	2022-10-28 15:51:00.812+00	47
43	https://bossdater.s3.amazonaws.com/1667041754792rn_image_picker_lib_temp_5aabaea4-aef8-4660-bc8d-4779ed964a0f.jpg	\N	2022-10-29 11:09:16.15+00	2022-10-29 11:09:16.15+00	56
44	https://bossdater.s3.amazonaws.com/1667066617780rn_image_picker_lib_temp_3d1e1f17-702b-46b2-97e2-d658e60cf622.jpg	\N	2022-10-29 18:03:38.948+00	2022-10-29 18:03:38.948+00	65
45	https://bossdater.s3.amazonaws.com/1667066617793rn_image_picker_lib_temp_0071f1d7-1a7d-4e31-924e-d60684ae28b7.jpg	\N	2022-10-29 18:03:38.998+00	2022-10-29 18:03:38.998+00	65
46	https://bossdater.s3.amazonaws.com/1667082918676rn_image_picker_lib_temp_8e6a10c8-257c-4e2f-8ead-2cdae1a1c079.jpg	\N	2022-10-29 22:35:19.575+00	2022-10-29 22:35:19.575+00	66
\.


--
-- Data for Name: UserPreferences; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public."UserPreferences" (id, "lookingFor", "minAge", "maxAge", "minHeight", "maxHeight", "interestedIn", "netWorth", "createdAt", "updatedAt", "relationshipStatusId", "bodyTypeId", "ethnicityId", "hairColorId", "educationId", "childrenId", "userId", "occupationId") FROM stdin;
1	gracefull young lady	22	28	5.9	6.3	female	1	2022-03-11 12:42:11.287+00	2022-03-22 06:47:27.016+00	2	2	2	2	2	1	2	6
3	gracefull young lady	25	29	5.9	6	male	\N	2022-03-24 05:52:11.787+00	2022-03-24 05:56:30.512+00	1	1	1	1	1	1	4	7
5	gracefull young lady	25	29	5.9	6	male	\N	2022-04-01 07:47:14.219+00	2022-04-05 09:11:41.159+00	1	1	1	1	1	1	9	7
7	\N	\N	\N	\N	\N	male	\N	2022-04-12 04:52:51.603+00	2022-04-12 04:52:51.603+00	\N	\N	\N	\N	\N	\N	14	\N
2	gracefull young lady	25	29	160	190	female	1	2022-03-21 14:18:11.413+00	2022-03-22 07:09:54.037+00	1	1	1	1	1	1	3	7
4	\N	\N	\N	160	190	male	\N	2022-03-28 11:40:30.776+00	2022-03-28 11:40:30.776+00	\N	\N	\N	\N	\N	\N	6	\N
6	gracefull young lady	25	29	160	190	female	\N	2022-04-12 04:51:49.372+00	2022-04-12 05:19:03.249+00	1	1	1	1	1	1	13	7
8	\N	\N	\N	\N	\N	male	\N	2022-04-12 09:40:39.948+00	2022-04-12 09:40:39.948+00	\N	\N	\N	\N	\N	\N	17	\N
9	\N	\N	\N	\N	\N	\N	\N	2022-04-19 07:20:51.576+00	2022-04-19 07:20:51.576+00	\N	\N	\N	\N	\N	\N	18	\N
10	\N	\N	\N	\N	\N	\N	\N	2022-04-19 09:27:06.182+00	2022-04-19 09:27:06.182+00	\N	\N	\N	\N	\N	\N	19	\N
11	\N	\N	\N	\N	\N	\N	\N	2022-04-19 10:55:19.635+00	2022-04-19 10:55:19.635+00	\N	\N	\N	\N	\N	\N	20	\N
13	\N	\N	\N	\N	\N	female	\N	2022-10-04 11:14:39.471+00	2022-10-04 11:14:39.471+00	\N	\N	\N	\N	\N	\N	22	\N
14	\N	\N	\N	\N	\N	female	\N	2022-10-04 12:09:45.743+00	2022-10-04 12:09:45.743+00	\N	\N	\N	\N	\N	\N	23	\N
15	\N	\N	\N	\N	\N	\N	\N	2022-10-05 07:49:41.866+00	2022-10-05 07:49:41.866+00	\N	\N	\N	\N	\N	\N	25	\N
16	\N	\N	\N	\N	\N	\N	\N	2022-10-06 12:10:36.932+00	2022-10-06 12:10:36.932+00	\N	\N	\N	\N	\N	\N	28	\N
18	Test	18	100	125	210	\N	8605505	2022-10-06 12:17:20.534+00	2022-10-06 12:40:56.756+00	3	\N	\N	\N	\N	\N	30	2
24	\N	18	69	125	144	female	\N	2022-10-14 10:23:16.979+00	2022-10-24 07:22:27.517+00	3	1	4	3	2	1	36	8
17	T	18	23	125	188	\N	\N	2022-10-06 12:15:41.004+00	2022-10-07 07:08:18.832+00	2	4	2	2	2	4	29	2
19	\N	\N	\N	\N	\N	\N	\N	2022-10-07 09:17:00.343+00	2022-10-07 09:17:00.343+00	\N	\N	\N	\N	\N	\N	31	\N
20	\N	\N	\N	\N	\N	\N	\N	2022-10-07 09:17:09.858+00	2022-10-07 09:17:09.858+00	\N	\N	\N	\N	\N	\N	32	\N
21	\N	\N	\N	\N	\N	\N	\N	2022-10-07 09:23:29.029+00	2022-10-07 09:23:29.029+00	\N	\N	\N	\N	\N	\N	33	\N
22	\N	\N	\N	\N	\N	male	\N	2022-10-07 09:52:39.029+00	2022-10-07 09:52:39.029+00	\N	\N	\N	\N	\N	\N	34	\N
41	\N	\N	\N	\N	\N	female	\N	2022-10-27 06:19:42.29+00	2022-10-27 06:19:42.29+00	\N	\N	\N	\N	\N	\N	58	\N
42	\N	\N	\N	\N	\N	female	\N	2022-10-27 06:30:32.677+00	2022-10-27 06:30:32.677+00	\N	\N	\N	\N	\N	\N	59	\N
35	Businesses man	48	74	160	210	male	5555	2022-10-21 11:09:43.158+00	2022-10-21 12:11:56.543+00	1	1	4	1	4	1	51	1
27	ded	47	100	161	210	male	\N	2022-10-20 05:16:07.054+00	2022-10-20 09:58:17.983+00	2	5	2	2	2	4	39	1
45	\N	\N	\N	\N	\N	female	\N	2022-10-28 12:43:53.281+00	2022-10-28 12:43:53.281+00	\N	\N	\N	\N	\N	\N	62	\N
37	\N	\N	\N	\N	\N	\N	\N	2022-10-26 06:37:53.648+00	2022-10-26 06:37:53.648+00	\N	\N	\N	\N	\N	\N	54	\N
43	test looking	51	91	161	203	female		2022-10-27 06:54:39.005+00	2022-10-27 09:39:08.605+00	3	2	3	3	2	2	60	7
28	\N	18	100	125	210	female	\N	2022-10-20 13:55:36.767+00	2022-10-21 05:12:31.402+00	2	1	5	4	2	4	41	7
30	\N	\N	\N	\N	\N	female	\N	2022-10-21 06:40:46.078+00	2022-10-21 06:40:46.078+00	\N	\N	\N	\N	\N	\N	43	\N
46	\N	\N	\N	\N	\N	female	\N	2022-10-28 14:32:56.295+00	2022-10-28 14:32:56.295+00	\N	\N	\N	\N	\N	\N	63	\N
23	Man	27	79	153	210	male	59966	2022-10-14 10:15:30.667+00	2022-10-21 06:50:45.402+00	3	\N	\N	\N	\N	\N	35	2
31	\N	\N	\N	\N	\N	female	\N	2022-10-21 07:11:38.469+00	2022-10-21 07:11:38.469+00	\N	\N	\N	\N	\N	\N	44	\N
33	\N	\N	\N	\N	\N	male	\N	2022-10-21 07:37:01.679+00	2022-10-21 07:37:01.679+00	\N	\N	\N	\N	\N	\N	46	\N
32	\N	18	100	125	210	female	\N	2022-10-21 07:33:34.203+00	2022-10-21 07:53:12.095+00	1	2	1	1	5	3	45	7
39	good time	26	94	148	204	male	\N	2022-10-26 17:44:06.905+00	2022-10-28 14:33:24.38+00	1	3	3	5	4	5	56	1
47	\N	\N	\N	\N	\N	male	\N	2022-10-28 15:27:57.766+00	2022-10-28 15:27:57.766+00	\N	\N	\N	\N	\N	\N	64	\N
34	Marriage proposal aaaaa	20	41	137	167	female	\N	2022-10-21 10:13:29.681+00	2022-10-28 15:51:08.919+00	5	4	5	2	1	2	47	7
36	\N	\N	\N	\N	\N	female	\N	2022-10-22 12:09:24.134+00	2022-10-22 12:09:24.134+00	\N	\N	\N	\N	\N	\N	53	\N
48	Handsome man	28	51	125	154	male	5800	2022-10-29 17:57:53.528+00	2022-10-29 18:52:19.647+00	1	3	4	4	3	1	65	5
49	\N	18	30	125	139	female	\N	2022-10-29 22:29:14.791+00	2022-10-29 22:37:37.885+00	1	4	6	5	1	4	66	9
26	Girl	18	100	125	210	female	2000	2022-10-17 04:44:03.571+00	2022-10-18 05:45:48.045+00	4	2	3	4	2	2	38	10
38	date	54	100	167	210	male	555	2022-10-26 14:20:31.148+00	2022-10-26 14:23:12.53+00	3	\N	\N	\N	\N	\N	55	2
40	\N	28	79	144	210	female	\N	2022-10-27 06:19:07.154+00	2022-10-27 14:05:39.26+00	3	3	5	2	2	2	57	7
25	\N	18	75	125	210	female	\N	2022-10-14 10:23:52.316+00	2022-10-22 15:27:27.806+00	2	3	2	3	4	3	37	7
29	Test	18	76	158	210	male	669	2022-10-21 06:13:22.456+00	2022-10-27 04:51:37.296+00	4	4	1	1	4	4	42	2
44	\N	\N	\N	\N	\N	female	\N	2022-10-28 11:46:59.343+00	2022-10-28 11:46:59.343+00	\N	\N	\N	\N	\N	\N	61	\N
\.


--
-- Data for Name: UserProfiles; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public."UserProfiles" (id, career, skills, "travelingSpot", "aboutMe", "lookingFor", height, "heightUnit", latitude, longitude, "jobTitle", linkedin, "netWorth", "createdAt", "updatedAt", "userId", "bodyTypeId", "ethnicityId", "hairColorId", "educationId", "childrenId", "occupationId", "relationshipStatusId", "recentLatitude", "recentLongitude") FROM stdin;
8	career	expert skills	skardu and gilgit	im 22 years old	a young boy	173	cm	29.394178	71.661469	developer	https://www.linkedin.com/in/muhammad-arslan-0624971b5/	$3k	2022-04-10 19:29:54.053+00	2022-04-19 08:57:19.212+00	12	\N	\N	\N	\N	\N	8	1	\N	\N
12	career	expert skills	skardu and gilgit	im 22 years old	a young boy	173	cm	29.394178	71.661469	developer	https://www.linkedin.com/in/muhammad-arslan-0624971b5/	$3k	2022-04-19 07:20:51.569+00	2022-04-19 09:04:57.685+00	18	\N	\N	\N	\N	\N	8	1	\N	\N
13	\N	\N	\N	\N	\N	\N	cm	\N	\N	\N	\N	\N	2022-04-19 09:27:06.175+00	2022-04-19 09:27:06.175+00	19	\N	\N	\N	\N	\N	\N	\N	\N	\N
14	\N	\N	\N	\N	\N	\N	cm	\N	\N	\N	\N	\N	2022-04-19 10:55:19.624+00	2022-04-19 10:55:19.624+00	20	\N	\N	\N	\N	\N	\N	\N	\N	\N
1	career	expert skills	skardu and gilgit	im 22 years old	a young boy	173	cm	15464567	1151654	developer	https://www.linkedin.com/in/muhammad-arslan-0624971b5/	$3k	2022-03-11 12:42:11.282+00	2022-03-22 06:49:54.63+00	2	1	1	1	1	1	2	\N	\N	\N
2	career	expert skills	skardu and gilgit	im 22 years old	a young boy	173	cm	15464567	1151654	developer	https://www.linkedin.com/in/muhammad-arslan-0624971b5/	$3k	2022-03-21 14:18:11.407+00	2022-03-22 06:53:51.511+00	3	\N	\N	\N	\N	\N	2	\N	\N	\N
3	career	expert skills	skardu and gilgit	im 22 years old	a young boy	173	cm	15464567	1151654	developer	https://www.linkedin.com/in/muhammad-arslan-0624971b5/	$3k	2022-03-24 05:52:11.772+00	2022-03-24 05:55:45.449+00	4	\N	\N	\N	\N	\N	2	1	\N	\N
5	\N	\N	\N	\N	\N	\N	cm	3212321312	321321312	\N	\N	\N	2022-04-01 07:47:14.206+00	2022-04-04 06:57:40.613+00	9	\N	\N	\N	\N	\N	\N	\N	15464567	1151654
6	\N	\N	\N	\N	\N	\N	cm	\N	\N	\N	\N	\N	2022-04-10 19:24:44.167+00	2022-04-10 19:24:44.167+00	10	\N	\N	\N	\N	\N	\N	\N	\N	\N
7	\N	\N	\N	\N	\N	\N	cm	\N	\N	\N	\N	\N	2022-04-10 19:27:04.094+00	2022-04-10 19:27:04.094+00	11	\N	\N	\N	\N	\N	\N	\N	\N	\N
10	\N	\N	\N	\N	\N	\N	cm	\N	\N	\N	\N	\N	2022-04-12 04:52:51.598+00	2022-04-12 04:52:51.598+00	14	\N	\N	\N	\N	\N	\N	\N	\N	\N
9	career	expert skills	skardu and gilgit	im 22 years old	a young boy	173	cm	29.394178	71.661469	developer	https://www.linkedin.com/in/muhammad-arslan-0624971b5/	$3k	2022-04-12 04:51:49.365+00	2022-04-12 04:56:42.881+00	13	\N	\N	\N	\N	\N	8	1	\N	\N
11	\N	\N	\N	\N	\N	\N	cm	\N	\N	\N	\N	\N	2022-04-12 09:40:39.942+00	2022-04-12 09:40:39.942+00	17	\N	\N	\N	\N	\N	\N	\N	\N	\N
4	\N	\N	\N	\N	\N	173	cm	\N	\N	\N	\N	\N	2022-03-28 11:40:30.769+00	2022-03-28 11:40:30.769+00	6	\N	\N	\N	\N	\N	6	1	\N	\N
16	\N	\N	\N	\N	\N	\N	cm	\N	\N	\N	\N	\N	2022-10-04 11:14:39.231+00	2022-10-04 11:14:39.231+00	22	\N	\N	\N	\N	\N	\N	\N	\N	\N
17	\N	\N	\N	\N	\N	\N	cm	\N	\N	\N	\N	\N	2022-10-04 12:09:45.489+00	2022-10-04 12:09:45.489+00	23	\N	\N	\N	\N	\N	\N	\N	\N	\N
18	\N	\N	\N	\N	\N	\N	cm	\N	\N	\N	\N	\N	2022-10-05 07:49:41.86+00	2022-10-05 07:49:41.86+00	25	\N	\N	\N	\N	\N	\N	\N	\N	\N
19	\N	\N	\N	\N	\N	\N	cm	\N	\N	\N	\N	\N	2022-10-05 08:54:29.031+00	2022-10-05 08:54:29.031+00	26	\N	\N	\N	\N	\N	\N	\N	\N	\N
20	\N	\N	\N	\N	\N	\N	cm	\N	\N	\N	\N	\N	2022-10-05 09:11:04.736+00	2022-10-05 09:11:04.736+00	27	\N	\N	\N	\N	\N	\N	\N	\N	\N
21	\N	\N	\N	\N	\N	\N	cm	\N	\N	\N	\N	\N	2022-10-06 12:10:36.927+00	2022-10-06 12:10:36.927+00	28	\N	\N	\N	\N	\N	\N	\N	\N	\N
42	\N	\N	\N	\N	\N	\N	cm	\N	\N	\N	\N	\N	2022-10-26 06:37:53.643+00	2022-10-26 06:37:53.643+00	54	\N	\N	\N	\N	\N	\N	\N	\N	\N
41	1	js	mountain 	Jahbdnjdn	Girl 	125	cm	18.4356502	73.8975855	mr	www.linkedin.com		2022-10-22 12:09:23.928+00	2022-10-22 12:13:53.557+00	53	\N	\N	\N	\N	\N	1	3	\N	\N
22	6			Testtes	T	125	cm	21.2218275	72.838602	\N	\N	\N	2022-10-06 12:15:40.998+00	2022-10-07 11:37:27.959+00	29	4	2	2	2	4	6	1	21.2218214	72.838612
30	\N	\N	\N	\N	\N	\N	cm	\N	\N	\N	\N	\N	2022-10-14 10:23:52.312+00	2022-10-22 15:27:28.256+00	37	\N	\N	\N	\N	\N	\N	\N	31.503661	74.2603841
43	7			Dev	Pro Dev	200	cm	37.4219983	-122.084	\N	\N	\N	2022-10-26 14:20:30.749+00	2022-10-26 14:36:51.979+00	55	2	2	3	3	3	7	2	37.4219983	-122.084
35	1	aksjdskad	asdasdasd	dev	women	187	cm	37.4219983	-122.084	dev	www.sas.com	1212	2022-10-21 06:40:45.83+00	2022-10-21 07:03:44.161+00	43	\N	\N	\N	\N	\N	1	1	\N	\N
36	1	asdasd	asdasd	dev	asdas	125	cm	37.4219983	-122.084	dev	www.dam.com	123213	2022-10-21 07:11:38.163+00	2022-10-21 07:15:06.859+00	44	\N	\N	\N	\N	\N	1	1	\N	\N
28	\N	\N	\N	bybybnbsjzjz	bybybybb	\N	cm	\N	\N	\N	\N	\N	2022-10-14 10:15:30.361+00	2022-10-21 07:35:19.379+00	35	\N	\N	\N	\N	\N	\N	\N	18.477586	73.8896427
23	\N	\N	\N	\N	\N	\N	cm	\N	\N	\N	\N	\N	2022-10-06 12:17:20.53+00	2022-10-06 13:13:55.43+00	30	\N	\N	\N	\N	\N	\N	\N	21.2218384	72.8386037
31	1	asd	asd	mananjdnsns	Girl	137	cm	0	0	deago	www.asasd.com	2000	2022-10-17 04:44:03.275+00	2022-10-18 08:20:31.361+00	38	2	3	4	2	2	1	3	18.4775706	73.8896359
38	7			Hfbjf	Bjtjgjkfn	125	cm	18.4775925	73.8896377	\N	\N	\N	2022-10-21 07:37:01.374+00	2022-10-21 07:38:44.088+00	46	1	3	5	4	1	7	3	\N	\N
32	6			dehh	ded	170	cm	0	0	\N	\N	\N	2022-10-20 05:16:06.774+00	2022-10-20 13:26:00.515+00	39	5	2	2	2	4	6	2	37.4219983	-122.084
46	5	ddf	dff	Xxvb	C band	125	cm	18.4302897	73.8989982	developer 	http://www.w3shool.com	22	2022-10-27 06:19:42.287+00	2022-10-27 06:22:00.519+00	58	\N	\N	\N	\N	\N	5	2	\N	\N
24	\N	\N	\N	\N	\N	\N	cm	\N	\N	\N	\N	\N	2022-10-07 09:17:00.335+00	2022-10-07 09:17:00.335+00	31	\N	\N	\N	\N	\N	\N	\N	\N	\N
25	\N	\N	\N	\N	\N	\N	cm	\N	\N	\N	\N	\N	2022-10-07 09:17:09.853+00	2022-10-07 09:17:09.853+00	32	\N	\N	\N	\N	\N	\N	\N	\N	\N
26	\N	\N	\N	\N	\N	\N	cm	\N	\N	\N	\N	\N	2022-10-07 09:23:29.023+00	2022-10-07 09:23:29.023+00	33	\N	\N	\N	\N	\N	\N	\N	\N	\N
27	\N	\N	\N	\N	\N	\N	cm	\N	\N	\N	\N	\N	2022-10-07 09:52:39.026+00	2022-10-07 09:52:39.026+00	34	\N	\N	\N	\N	\N	\N	\N	\N	\N
37	1	asdasd	dasdsad	dev	women	125	cm	37.4219983	-122.084	ceo	www.ceo.com	123	2022-10-21 07:33:33.894+00	2022-10-21 12:16:49.855+00	45	\N	\N	\N	\N	\N	1	1	37.4219983	-122.084
40	7			Test	Businesses man	149	cm	18.4775921	73.8896345	\N	\N	5555	2022-10-21 11:09:42.912+00	2022-10-21 12:22:28.162+00	51	1	4	1	4	1	7	3	18.4775911	73.8896433
29	\N	\N	\N	\N	\N	\N	cm	\N	\N	\N	\N	\N	2022-10-14 10:23:16.975+00	2022-10-24 07:22:31.582+00	36	\N	\N	\N	\N	\N	\N	\N	31.4623278	74.4145688
33	1	ZXzX	ZXZX	sdasd	asdasd	163	cm	0	0	asdasd	www.scs.com	999	2022-10-20 13:55:36.497+00	2022-10-20 14:08:09.431+00	41	\N	\N	\N	\N	\N	1	2	37.4219983	-122.084
34	6			Test	Test	146	cm	18.477593	73.8896324	\N	\N	669	2022-10-21 06:13:22.15+00	2022-10-27 04:51:37.293+00	42	4	1	1	4	4	6	1	18.4356502	73.8975855
47	2	b	c	Aa	Bb	186	cm	18.4339867	73.8988183	bjgn	https://www.linkedin.com	5555	2022-10-27 06:30:32.674+00	2022-10-27 06:31:58.946+00	59	\N	\N	\N	\N	\N	2	3	\N	\N
52	\N	\N	\N	\N	\N	\N	cm	\N	\N	\N	\N	\N	2022-10-28 15:27:57.762+00	2022-10-28 15:27:57.762+00	64	\N	\N	\N	\N	\N	\N	\N	\N	\N
45	1	software developer 	kerala	Business man	Marriage proposal 	199	cm	18.4339776	73.8987875	director 	https://www.linkedin.com/in/khajaamin	80000	2022-10-27 06:19:07.148+00	2022-10-27 15:08:35.47+00	57	\N	\N	\N	\N	\N	1	3	18.4339769	73.898784
49	\N	\N	\N	\N	\N	\N	cm	\N	\N	\N	\N	\N	2022-10-28 11:46:59.34+00	2022-10-28 11:54:35.057+00	61	\N	\N	\N	\N	\N	\N	\N	31.4622486	74.4145492
50	\N	\N	\N	\N	\N	\N	cm	\N	\N	\N	\N	\N	2022-10-28 12:43:53.278+00	2022-10-28 12:43:53.278+00	62	\N	\N	\N	\N	\N	\N	\N	\N	\N
48	1	test	test	test about	test looking	186	cm	37.4219983	-122.084	test	http://www.linkedin/i/yasmin		2022-10-27 06:54:39.001+00	2022-10-27 13:12:48.608+00	60	\N	\N	\N	\N	\N	1	1	37.4219983	-122.084
39	1	software developer 	mountain 	Athletes aaaaaa	Marriage proposal aaaaa	132	cm	18.4775862	73.8896431	director 	https://www.linkedin.com/in/khajaamin	\N	2022-10-21 10:13:29.374+00	2022-10-28 15:51:08.916+00	47	4	5	2	1	2	1	2	31.4622538	74.4145467
51	1	osksk	mzksm	Oo	Ok	125	cm	31.4622517	74.4145434	ooooo	www.bc.linkedin.com	50000	2022-10-28 14:32:56.291+00	2022-10-28 14:34:30.31+00	63	\N	\N	\N	\N	\N	1	3	\N	\N
53	7			o hello i am interested 	Handsome man	128	cm	31.458559	74.3537122	\N	\N	5800	2022-10-29 17:57:53.522+00	2022-10-29 19:03:16.556+00	65	3	4	4	3	1	7	1	31.4585027	74.353716
44	7			good man	good time	188	cm	37.4219983	-122.084	\N	\N	\N	2022-10-26 17:44:06.696+00	2022-10-29 15:00:33.015+00	56	3	3	5	4	5	7	4	18.4339825	73.8988142
54	1	florting	sakerdu	I am very good	Women \n	125	cm	31.4585955	74.3536961	army officer 	 www.linkedin.com	250000	2022-10-29 22:29:14.787+00	2022-10-29 23:01:05.327+00	66	\N	\N	\N	\N	\N	1	3	31.4585318	74.3537039
\.


--
-- Data for Name: UserStatuses; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public."UserStatuses" (id, status, "createdAt", "updatedAt", "deletedAt") FROM stdin;
1	pending	2022-03-11 10:27:55.885+00	2022-03-11 10:27:55.885+00	\N
2	blocked	2022-03-11 10:27:55.885+00	2022-03-11 10:27:55.885+00	\N
3	verified	2022-03-11 10:27:55.885+00	2022-03-11 10:27:55.885+00	\N
\.


--
-- Data for Name: UserTags; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public."UserTags" (id, "createdAt", "updatedAt", "userPreferenceId", "tagId") FROM stdin;
428	2022-10-29 22:37:37.895+00	2022-10-29 22:37:37.895+00	49	1
429	2022-10-29 22:37:37.895+00	2022-10-29 22:37:37.895+00	49	3
430	2022-10-29 22:37:37.895+00	2022-10-29 22:37:37.895+00	49	6
431	2022-10-29 22:37:37.895+00	2022-10-29 22:37:37.895+00	49	5
432	2022-10-29 22:37:37.895+00	2022-10-29 22:37:37.895+00	49	4
397	2022-10-27 14:05:39.267+00	2022-10-27 14:05:39.267+00	40	1
398	2022-10-28 14:33:25.073+00	2022-10-28 14:33:25.073+00	39	1
399	2022-10-28 14:33:25.073+00	2022-10-28 14:33:25.073+00	39	6
424	2022-10-29 18:52:19.653+00	2022-10-29 18:52:19.653+00	48	1
425	2022-10-29 18:52:19.653+00	2022-10-29 18:52:19.653+00	48	6
426	2022-10-29 18:52:19.653+00	2022-10-29 18:52:19.653+00	48	7
427	2022-10-29 18:52:19.653+00	2022-10-29 18:52:19.653+00	48	8
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public."Users" (id, gender, "phoneNumber", email, password, "birthDate", "emailVerifiedAt", "phoneVerifiedAt", "createdAt", "updatedAt", "deletedAt", name, "isDisabled", "facebookId", "googleId", "appleId", "deviceToken", "profileCompletionPercentage", "showWhenViewSomeOne", "onlineStatus", "showRecentLocation", "showInSearch", "showWhenViewSomeone", "showFavouritedOne", "joiningDate", "someoneSendMeMessage", "someoneFavouritedMe") FROM stdin;
17	female	+92343213221131	test11@mailinator.com	$2a$08$xeR8Iy/n.Qq0FpJtOr8shuAmBtSRpgN02LM.ygFKqzw1tOf1lBUpa	1996-11-11	\N	\N	2022-04-12 09:40:39.935+00	2022-04-15 05:26:22.512+00	\N	alinaa	f	\N	\N	\N	\N	25	f	\N	\N	\N	\N	\N	\N	t	t
19	male	+9231232123	21313213@gmail.com	\N	1950-01-01	\N	\N	2022-04-19 09:27:06.161+00	2022-04-19 10:51:30.196+00	\N	\N	f	\N	12345216789312321321	\N	\N	25	t	t	t	t	t	t	t	t	t
4	female	+92300	alina3a@gmail.com	$2a$08$0FDaAqWyvgta8dSYwa4sBukc4/nCt4MidOUSsP8On.IEBK0fox6wO	1996-11-11	\N	\N	2022-03-24 05:52:11.742+00	2022-03-24 05:52:11.742+00	\N	alinaa	f	\N	\N	\N	\N	25	t	\N	\N	\N	\N	\N	\N	t	t
1	\N	\N	admin@gmail.com	$2a$08$PqGh/dx3P/Re95BXZ5eKQuLb12O6ICL1jcsoWxmG1N0QwYCDMMeLC	\N	\N	\N	2022-03-11 10:27:55.96+00	2022-03-11 10:27:55.96+00	\N	\N	f	\N	\N	\N	\N	25	t	\N	\N	\N	\N	\N	\N	t	t
20	\N	\N	12332121331212@gmail.com	\N	\N	\N	\N	2022-04-19 10:55:19.6+00	2022-04-19 10:55:19.6+00	\N	\N	f	\N	12345212316789312321321	\N	\N	25	t	t	t	t	t	t	t	t	t
9	female	+92343213	qeeqwqw@gmail.com	$2a$08$yVRzTo8NhWzoxmXeafIGnuSn7C53hUt7fogAEefe5sVoic4Bmm.N2	1996-11-11	\N	\N	2022-04-01 07:47:14.202+00	2022-04-05 09:11:41.218+00	\N	alinaa	f	\N	\N	\N	\N	25	t	\N	\N	\N	\N	\N	\N	t	t
10	\N	\N	bilalmubasher514@gmail.com	\N	\N	\N	\N	2022-04-10 19:24:44.117+00	2022-04-10 19:24:44.117+00	\N	\N	f	\N	123456789	\N	\N	25	t	\N	\N	\N	\N	\N	\N	t	t
11	male	\N	\N	\N	1950-01-01	\N	\N	2022-04-10 19:27:04.086+00	2022-04-10 19:27:04.086+00	\N	\N	f	123456789	\N	\N	\N	25	t	\N	\N	\N	\N	\N	\N	t	t
14	female	+9234321322113	test2@mailinator.com	$2a$08$y6xCrwM/guofuAM9FR94d.bI/CQFLTvNxe93LMzGGbAQuU8WDgdJW	1996-11-11	\N	\N	2022-04-12 04:52:51.593+00	2022-04-12 04:52:51.593+00	\N	alinaa	f	\N	\N	\N	\N	25	t	\N	\N	\N	\N	\N	\N	t	t
3	male	+923364257118	talha22@gmail.com	$2a$08$4uy6hF3n5VnPcQ8y9F0n5ekB92Jh8wiOh5YsrY36w6tpbFnFQcwFy	1996-11-19	\N	\N	2022-03-21 14:18:11.395+00	2022-03-30 10:29:08.204+00	2022-03-30 10:31:42.219+00	\N	t	\N	\N	\N	\N	100	t	\N	\N	\N	\N	\N	\N	t	t
2	male	+923364257086	user3@gmail.com	$2a$08$c/d1f4sa/thyzwSehMroQehHdPt6RhjqkBS2iTETyZnnTA2Z5Yq4a	1996-11-13	\N	\N	2022-03-11 12:42:11.272+00	2022-04-18 06:23:35.715+00	\N	\N	f	\N	\N	\N	\N	100	t	\N	\N	\N	\N	\N	\N	t	f
6	female	+923002	arslanargon@gmail.com	$2a$08$7bkE9405j8YLJxsZvXubkun4JFlLIS2ZwZQbOHI.Y5naGy2kccdT.	1996-11-11	\N	\N	2022-03-28 11:40:30.758+00	2022-03-29 07:23:47.205+00	\N	alinaa	f	\N	\N	\N	\N	100	t	\N	\N	\N	\N	\N	\N	t	t
13	male	+9234321322112	test1@mailinator.com	$2a$08$Zt5XdwbXiWCLQY.ws.QL0uqXjGOxa5gHOCALvC7Pr2rlY1OiwyFYi	1996-11-11	\N	\N	2022-04-12 04:51:49.354+00	2022-04-12 05:21:11.021+00	2022-04-12 09:38:23.443+00	alinaa	f	\N	\N	\N	\N	75	t	\N	\N	\N	\N	\N	\N	t	t
12	male	31232123	swann@gmail.com	\N	1950-01-01	\N	\N	2022-04-10 19:29:54.046+00	2022-04-19 08:58:15.814+00	\N	\N	f	\N	\N	123456789	\N	50	t	\N	\N	\N	\N	\N	\N	t	t
18	male	\N	tes2@gmail.com	\N	\N	\N	\N	2022-04-19 07:20:51.554+00	2022-04-19 09:04:44.275+00	\N	\N	f	\N	12345216789	\N	\N	50	t	t	t	t	t	t	t	t	t
22	male	\N	talhakhan@gmail.com	$2a$08$94Z8HYzGcLkKi3jqm58e9uQgfdzli7ZGqrKejAGtoYTQ1Q7WfwTJu	\N	\N	\N	2022-10-04 11:14:38.938+00	2022-10-04 11:19:07.016+00	\N	Talha	f	\N	\N	\N	\N	25	t	t	t	t	t	t	t	t	t
43	male	+11112121212	new@gmail.com	$2a$08$Y5m6DPWonaUr2e8sULgvGeqCg3ZMza5Aek.VqYGV9VWL8Zy/PfxHa	1987-10-21	\N	\N	2022-10-21 06:40:45.58+00	2022-10-21 06:40:45.58+00	\N	tushar	f	\N	\N	\N	\N	25	t	t	t	t	t	t	t	t	t
33	\N	\N	aksolnki000@gmail.com	\N	\N	\N	\N	2022-10-07 09:23:29.017+00	2022-10-07 09:25:51.76+00	\N	\N	f	\N	116150882231243014845	\N	cFqbswBkRiW6egd5l0lQ1O:APA91bHNaT7MbuNb63Rq49S61BwjGqSxWm_2sX6yWPbhiZshv3n6xQbrhB9nGPSWvYBvyLhnqTH2gNxRtcwkUfASFO_vkRPHS9gxeSpY1z_jEtn0oE1O6OU4wEo-_RGmiQK0OVW5SC0m	25	t	t	t	t	t	t	t	t	t
29	female	+12336548	orangemotorolalates@gmail.com	\N	1980-10-07	\N	\N	2022-10-06 12:15:40.99+00	2022-10-07 07:08:18.826+00	\N	test1	f	\N	104306130054429976410	\N	\N	75	t	t	t	t	t	t	t	t	t
31	\N	\N	aksolnki0011@gmail.com	\N	\N	\N	\N	2022-10-07 09:17:00.321+00	2022-10-07 09:17:00.321+00	\N	\N	f	\N	101965210385321401541	\N	\N	25	t	t	t	t	t	t	t	t	t
38	male	+1111111111	deago@gmail.com	$2a$08$nztQ24v89v7yucjaftCwBeNj.haYD0di/uGqL4.qU4gg.sEGbE15C	1998-10-17	\N	\N	2022-10-17 04:44:02.809+00	2022-10-18 05:48:38.107+00	\N	Deago	f	\N	\N	\N	e0ZLkrx-QlerafYHSGaeEC:APA91bFLy-EBbzjuyk2vw_Cifk80FQ84yMXXK-pq6VIq9nXhIuhWDqAB27709-wxnvH7iAPh5nY-3GJs9KHVteNf3Zqc_bZIbQntrrGhCB2xvf3KCvS6XAiYdBBchQz34JseLcB6qqJM	75	t	t	t	t	t	t	t	t	t
32	\N	\N	akramkhansolnki18@gmail.com	\N	\N	\N	\N	2022-10-07 09:17:09.847+00	2022-10-07 09:20:42.326+00	\N	\N	f	\N	104650636951504154394	\N	cFqbswBkRiW6egd5l0lQ1O:APA91bHNaT7MbuNb63Rq49S61BwjGqSxWm_2sX6yWPbhiZshv3n6xQbrhB9nGPSWvYBvyLhnqTH2gNxRtcwkUfASFO_vkRPHS9gxeSpY1z_jEtn0oE1O6OU4wEo-_RGmiQK0OVW5SC0m	25	t	t	t	t	t	t	t	t	t
39	female	+11111111111	sam@gmail.com	$2a$08$oPlYIaWpDWgkwrYktjrsDOSzAewIQrijIxQaJWYNG6bITFSLWq8Ee	1997-10-20	\N	\N	2022-10-20 05:16:06.479+00	2022-10-20 09:58:17.369+00	\N	weqwesAS	f	\N	\N	\N	\N	75	t	t	t	t	t	t	t	t	t
34	Male	\N	dawoodbinzafar18@gmail.com	$2a$08$hCenptDRc9PJfT3G.DqfvOKlDE.JeBK5DlkQ8zI4tjTYMYODvg00.	\N	\N	\N	2022-10-07 09:52:39.022+00	2022-10-14 10:14:42.679+00	\N	\N	f	\N	\N	\N	fp81NWkVRNSJFrjJOnk25K:APA91bENvxceRpjmP8BZMBomJyUb9dCnMBPaD19jXbq1pOxxBXObOg9q2NZtv9KyhK2eVqxyWX7DFD9Bqv19F8t4BNwv722EQOoZMDPRu1y_uIX6-bY1Vjqsgv5zyqPqNLREMbjcPsUF	25	t	t	t	t	t	t	t	t	t
37	male	+923244644590	mtkhan326@gmail.com	$2a$08$UP8EpSUm8ktmJ8tCX9rErO9JisO8BgSePJ1uyWwM4gj8j.K1aUHTC	\N	\N	\N	2022-10-14 10:23:52.308+00	2022-10-22 15:27:27.838+00	\N	TKhan	f	\N	\N	\N	chpKzWMZQ22w-X0NUm05SL:APA91bGV3WxEdiC6gF4ItYtFFM46sgirD7s0cMcOq904Nn_4trm4BdaCqXN1jpcKUCvudGet9yKngvThLhI7LQ_14t26CMaky9RnGUZLS-nDvcsbp4K-Ko75GltiMGSk_BKOpTdTjBn9	75	t	t	t	t	t	t	t	t	t
23	male	\N	talhakhan123@gmail.com	$2a$08$vhzlMT8iviA7kjoGfXmMYejT31yKBzMItW.ozTTfjaqvE5eR27mBa	\N	\N	\N	2022-10-04 12:09:45.226+00	2022-10-05 07:38:33.826+00	\N	\N	f	\N	\N	\N	\N	25	t	t	t	t	t	t	t	t	t
25	\N	\N	\N	\N	\N	\N	\N	2022-10-05 07:49:41.855+00	2022-10-05 07:49:41.855+00	\N	\N	f	123	\N	\N	\N	25	t	t	t	t	t	t	t	t	t
26	male	\N	talhakhan326@gmail.com	$2a$08$rTwXltOgccu1Hs./uNdbDe4H9OOt7zXpwJ3gKZoweb1j3q4y3PtQ.	\N	\N	\N	2022-10-05 08:54:28.78+00	2022-10-05 08:54:28.78+00	\N	\N	f	\N	\N	\N	\N	25	t	t	t	t	t	t	t	t	t
27	male	\N	talhakhan32@gmail.com	$2a$08$BC1Zp35AJ5.lZZ1A4jwUl.k1wDLuy.r28BWwdB2ukkDqixPsAcRMu	\N	\N	\N	2022-10-05 09:11:04.725+00	2022-10-05 09:11:04.725+00	\N	\N	f	\N	\N	\N	\N	25	t	t	t	t	t	t	t	t	t
28	\N	\N	micromax1bcodealchemy@gmail.com	\N	\N	\N	\N	2022-10-06 12:10:36.914+00	2022-10-06 12:10:36.914+00	\N	\N	f	\N	108534709510100952461	\N	\N	25	t	t	t	t	t	t	t	t	t
30	\N	\N	orangeasustest@gmail.com	\N	\N	\N	\N	2022-10-06 12:17:20.523+00	2022-10-06 12:40:56.785+00	\N	\N	f	\N	113802943671627417695	\N	\N	50	t	t	t	t	t	t	t	t	t
44	male	+123123123123	new123@gmail.com	$2a$08$W..EPDV6zsLCIvADt7fsW.Zle0xIx4lqj6z3y1XcGrmMTYCMlzdSu	1999-10-21	\N	\N	2022-10-21 07:11:37.846+00	2022-10-21 07:11:37.846+00	\N	sam	f	\N	\N	\N	\N	25	t	t	t	t	t	t	t	t	t
41	male	+11111111121212	tush@gmail.com	$2a$08$sZkgMn0X5rvxtF328FhrBeF7p/ofKBYpcHOOqrpkQcDbpNgo/o/JK	1988-10-20	\N	\N	2022-10-20 13:55:36.214+00	2022-10-21 05:12:32.962+00	\N	tush	f	\N	\N	\N	cnJqbtUUQLGsFfQCp7VsDB:APA91bF1-DppareWW8UZQx46_m0CMf8K0VM1WvQIAbbWJdEA8GG6UqCNiZYvF8ZsYrBNQ-CLNGf7Ighm3jSUskQJekc4GBNFGXvzumIrd0KjtIaQGCO99-cU0shGbWgZTTNgXckqP5fl	75	t	t	t	t	t	t	t	t	t
36	male	+923244644589	mtk326@gmail.com	$2a$08$x4o13RakOjCkzhDtB0o2wulKD/2U9gvnddxfvSpDZoE7XJ1g8JMsy	\N	\N	\N	2022-10-14 10:23:16.965+00	2022-10-24 07:22:27.555+00	\N	TK	f	\N	\N	\N	fQalZqF9TPSL6fkt3XNxz5:APA91bH0gvBscetxk3sQoouhTj65AmX6uPmq30jLdJadJGbsFE8jh6FrAyxaeCnXeRDmddx3NNEKMMIdM1KnuMQ0AQs-9DiyPUlM0M2I1yTldFOPfrFJVPpQbJqfXZSzkiObz3j-_rD3	75	t	t	t	t	t	t	t	t	t
35	Male	\N	dude18@gmail.com	$2a$08$qT7jG80jHSv7YBCIZUj5HuLPazZhnZ6i9ChfVoe0KkmCa9nk21IQa	\N	\N	\N	2022-10-14 10:15:28.918+00	2022-10-21 06:50:48.03+00	\N	bybyzjzjsjznz	f	\N	\N	\N	fUbvOwrAT0ieRzHyok4Y-Y:APA91bHmEDLQNTeVyOytE6qRX3pz84bja-uTkAffTdbHBH8UvnUrtKrnSlxXD8gNx-qXh-8usqxdGkxEw2klXyUrdryvCgkU8wyv-hR9hRC3MG0dKUsbDLTq7-kRZVkv91N1-eFkmXBq	75	t	t	t	t	t	t	t	t	t
46	female	+7397850030	dilshadattar242@gmail.com	$2a$08$/ubyonzfUyG1D.WuYmXmdukbaq/DrWtwjn9rl/.bQlMNA1TzPiBqC	1998-10-21	\N	\N	2022-10-21 07:37:01.124+00	2022-10-21 07:37:01.124+00	\N	Dilshad Attar	f	\N	\N	\N	\N	25	t	t	t	t	t	t	t	t	t
45	male	+123123123	rares@gmail.com	$2a$08$b9OvfBIvcoDmgM6vVA0B8ONptLzSPx684uMCOVyfBBwb.3kfBSXtG	1903-10-21	\N	\N	2022-10-21 07:33:33.544+00	2022-10-21 07:53:13.835+00	\N	rares	f	\N	\N	\N	\N	75	t	t	t	t	t	t	t	t	t
47	male	+919372664783	khajaamin@masterblocks.co.in	$2a$08$aYV2V3o1e4lXII0wUD/Hu.sqt6vO1zBpKUiHeJuArnaXyDHlJQA8a	1961-10-20	\N	\N	2022-10-21 10:13:29.087+00	2022-10-28 15:51:08.913+00	\N	good nam	f	\N	\N	\N	cHXtYLd8QuyF1R0Tx6Fb3H:APA91bF0aj-lXhO4Ltzs5kzGIoy_BwIQgFzgq1Uxo8CM2HTSx0VHxIIgxJbl1MbHeSexEVVQowUEfvr_cFXmuKkH4uPOlKWm3nt5cqG_fWDvNSKl-S7EmDFfsXgYM1EAW2w_jc-Cdoe_	100	t	t	f	f	t	t	t	f	f
42	female	+7773959860	dilshadattar24@gmail.com	$2a$08$vD3FUSHZkWAVkgov2fIxKO.KSdLnDYjWBTA6gAlr3VZd2T4AtTji.	1956-10-20	\N	\N	2022-10-21 06:13:21.795+00	2022-10-27 04:51:37.29+00	\N	gdgdgdggd	f	\N	\N	\N	eKZXXG28Qne7wVRFvbrGUs:APA91bHjb_Jyw7y607RTF_ttvKs--Jeku7MgaUeTqrdKQCbSB_demGvd8su_8y0HcTtjoEcYifCjP1CcZd2QEjYy9MrRE8vzzizfGos7iDbuml4STSumkFi0k70fXSRnGAyka9jPTX3S	75	t	t	t	t	t	t	t	t	t
51	female	+7773959863	dilshadattar245@gmail.com	$2a$08$QMEl23a/afhRrJ3t1PTIg.0wNPXSF6m63O1CyelG5aAqxxTRvdjIW	1998-10-21	\N	\N	2022-10-21 11:09:42.625+00	2022-10-21 12:11:56.011+00	\N	Dilshad Attar2	f	\N	\N	\N	\N	75	t	t	t	t	t	t	t	t	t
53	male	+9193726647839	dilshhhadattar24@gmail.com	$2a$08$gRC7Vw224eHQUFUdliNJWuVopGcEDXf88dbhIn.BIN/ENT58JPXtK	1988-10-22	\N	\N	2022-10-22 12:09:23.713+00	2022-10-22 12:09:23.713+00	\N	yasmin	f	\N	\N	\N	\N	25	t	t	t	t	t	t	t	t	t
58	male	+7350530020	yasmin.attar72@gmail.com	$2a$08$1bqeDCQKBjtPw5UYMuiq2ePeOiE.VmE6HS8xW0vi/cAd7rqFPcCp6	1992-08-11	\N	\N	2022-10-27 06:19:42.283+00	2022-10-27 06:19:42.283+00	\N	Yasmin Attar	f	\N	\N	\N	\N	25	t	t	t	t	t	t	t	t	t
59	male	+93726647831	khajaamin@gmail.coma	$2a$08$6COWhYicTxR/m5qJUM.i2ueV4KUSS64w6XWND9aLwTpvviZIasN9a	2004-10-01	\N	\N	2022-10-27 06:30:32.67+00	2022-10-27 06:30:32.67+00	\N	ka	f	\N	\N	\N	\N	25	t	t	t	t	t	t	t	t	t
65	female	+9163254786	khadija@mail.com	$2a$08$hKjMWfwWDMTyQLsIwTWmn.cjB5Dy8/yRxUjSr2dSWxhZfc.TBgpMG	1994-10-29	\N	\N	2022-10-29 17:57:53.458+00	2022-10-29 19:03:14.303+00	\N	dijaaaa k	f	\N	\N	\N	ek-Jbe41T9iXcpKOpUgsQ9:APA91bEExqXqMwW9eqg1wehWQrIesFCnm3FqQGGZw_s8tkAvcuz2jxgrM6xrci6q0jW9LCuJbmG6KX8oTkvAMxtzC4M6c4KNQpQ378LfSqkVevKpXJmp8nLtJ7bo-ODd6mygXrpqdq3Z	100	t	t	t	t	t	t	t	t	t
56	female	+1234567890	test@test.com	$2a$08$pW21PmMzaDH.JVx.MXeTZuw1wnfhhh6yNxGa1L8.IWdyZlLq6kiaS	2001-10-26	\N	\N	2022-10-26 17:44:06.487+00	2022-10-29 06:36:17.856+00	\N	Test name 	f	\N	\N	\N	dvJfAPKeR5ChRf0DCMCAE_:APA91bGsKXCNx4Qzk9QvxtubvQ3whclKIghAEJKxfEh_SVXKLm5sej7_uaU9PYuCX3lqn75pqSPvTeyLyFOo0oUbLbk-W4z34OeuzsLGoBGGTp0WIEwfxKSYkZXKBesRaPGzPRrO66TY	100	t	t	t	t	t	t	t	t	t
57	male	+937266478380	khajaamin@gmail.com	$2a$08$iW776rFqUfHD4cYpyr4KEuEEH60A7kF1vWwRt5llzftZpXqMECpnm	1988-10-16	\N	\N	2022-10-27 06:19:07.14+00	2022-10-27 14:05:39.296+00	\N	real ak	f	\N	\N	\N	eohmJPo8Q4iy91wSxXReu3:APA91bF5qJN6Cy8darwJ4aFss8hTaMINh8sff7QmdA2Z7UTq9VojCQWrDeSnBjGtd4rIjUNuh340R_VHODOOmLcd5-xpjFZiJ8j5yf3PBQlNL2ui-GQ3DzIQcp4BQdGGqBV9_1iv09ra	100	t	t	t	t	t	t	t	t	t
61	male	+37846784867881	muhammadtalhakhan326@gmail.com	$2a$08$wx5g3tG2gD/onjlMiLmW6OeLc7k.MEBzWimCJc1WlwFf4iDvbsLXG	2000-10-28	\N	\N	2022-10-28 11:46:59.336+00	2022-10-28 11:47:45.398+00	\N	hi	f	\N	\N	\N	csplWpLvSgeUyLbvu8HT6y:APA91bFemiXwZ4uNMlJgE36ehQTq7SDM6nbzRk9jMPLQVZWdPKkIIKvFCmmEiQDN-0b9U8f50Hlus2r20fr7kp69m_vtGbWfl8dZDRKTtO6lyalwCNOZ3rYfvEwDgaXh94ReaGMK-9TZ	25	t	t	t	t	t	t	t	t	t
62	male	+8649467494	leo8545@gmail.com	$2a$08$EiW5ozNCedKKb6C.fY2wDOjojQsjw6TIZ7oo2xO5dKzLFL7z6Qo9e	2000-10-28	\N	\N	2022-10-28 12:43:53.273+00	2022-10-28 12:43:53.273+00	\N	Graphic Alert	f	\N	\N	\N	\N	25	t	t	t	t	t	t	t	t	t
54	\N	\N	argontech704@gmail.com	\N	\N	\N	\N	2022-10-26 06:37:53.631+00	2022-10-26 06:37:53.631+00	\N	\N	f	\N	114523935612800906262	\N	\N	25	t	t	t	t	t	t	t	t	t
63	male	+6649654994	developeronecall@gmail.com	$2a$08$rIpxgDB08uf.qV1JnUKdSuV/mPvxV2CLTaivd84imU66IDlKEOdsi	1999-10-28	\N	\N	2022-10-28 14:32:56.285+00	2022-10-28 14:32:56.285+00	\N	9o	f	\N	\N	\N	\N	25	t	t	t	t	t	t	t	t	t
55	female	+9852478563	yasmin@master.com	$2a$08$Y/XZqtYqZtKnFRSkd3NolOPfHBCcJJhZ.IuWMiUGcPGe4kxkrzXUe	2004-10-20	\N	\N	2022-10-26 14:20:30.454+00	2022-10-26 14:23:14.195+00	\N	Yasmin 	f	\N	\N	\N	\N	75	t	t	t	t	t	t	t	t	t
60	male	+999999996	yasmin@gm.com	$2a$08$5VSLvz4dLqchzp45i.4jcOJkvQPZoyRzwldkzYcmFlQqZsPFwDKNi	2004-10-22	\N	\N	2022-10-27 06:54:38.996+00	2022-10-27 12:51:51.346+00	\N	Yasmin a	f	\N	\N	\N	e4OfKixtRJegTB8ao4Mfkw:APA91bHKIQi0ZPCvh1tI2yWcHkoLfmMpYvYIdPfXS2rliM0yIPHfG2i-DjL-crUBqlAHjzf-BtXyBwqovFDtLG2Rb8cbUDoecW_PLGv0nn1MQAZQ1SVR5lLRDZWKU4zJC7sfdi6kpM2o	100	t	t	t	t	t	t	t	t	t
64	female	+937266478399	dua@test.com	$2a$08$1.FFuliysL2ISxuGk5nGb.lHInxrFjZqRdvQFKVk2VvlVhaKaH4OC	2004-10-02	\N	\N	2022-10-28 15:27:57.758+00	2022-10-28 15:27:57.758+00	\N	dua lipa	f	\N	\N	\N	\N	25	t	t	t	t	t	t	t	t	t
66	male	+9163245689	sami@mail.com	$2a$08$/uLy7dkig3EC075TozXss.vv7X3lqxONcvHdl1NzTU5Lx/yHENdYC	1990-10-30	\N	\N	2022-10-29 22:29:14.782+00	2022-10-29 23:01:03.971+00	\N	sami khan	f	\N	\N	\N	ek-Jbe41T9iXcpKOpUgsQ9:APA91bEExqXqMwW9eqg1wehWQrIesFCnm3FqQGGZw_s8tkAvcuz2jxgrM6xrci6q0jW9LCuJbmG6KX8oTkvAMxtzC4M6c4KNQpQ378LfSqkVevKpXJmp8nLtJ7bo-ODd6mygXrpqdq3Z	100	t	t	t	t	t	t	t	t	t
\.


--
-- Data for Name: Views; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public."Views" (id, "createdAt", "updatedAt", "from", "to") FROM stdin;
1	2022-04-01 07:50:00.342+00	2022-04-01 07:50:00.342+00	9	2
2	2022-04-01 07:50:37.941+00	2022-04-01 07:50:37.941+00	9	3
4	2022-10-06 12:46:47.325+00	2022-10-06 12:46:47.325+00	30	6
5	2022-10-17 06:51:45.933+00	2022-10-17 06:51:45.933+00	38	6
6	2022-10-17 06:51:45.967+00	2022-10-17 06:51:45.967+00	38	6
7	2022-10-20 06:06:23.788+00	2022-10-20 06:06:23.788+00	39	2
8	2022-10-20 14:06:00.676+00	2022-10-20 14:06:00.676+00	41	6
9	2022-10-20 14:25:43.307+00	2022-10-20 14:25:43.307+00	37	6
10	2022-10-21 07:54:04.936+00	2022-10-21 07:54:04.936+00	45	6
11	2022-10-21 09:40:02.168+00	2022-10-21 09:40:02.168+00	42	2
12	2022-10-21 11:44:28.117+00	2022-10-21 11:44:28.117+00	45	51
13	2022-10-21 12:16:16.414+00	2022-10-21 12:16:16.414+00	45	35
14	2022-10-22 17:40:47.877+00	2022-10-22 17:40:47.877+00	47	6
15	2022-10-22 18:00:06.23+00	2022-10-22 18:00:06.23+00	47	42
16	2022-10-22 20:46:35.106+00	2022-10-22 20:46:35.106+00	47	51
17	2022-10-23 05:00:44.342+00	2022-10-23 05:00:44.342+00	47	34
18	2022-10-23 14:23:11.861+00	2022-10-23 14:23:11.861+00	47	46
19	2022-10-23 14:24:13.876+00	2022-10-23 14:24:13.876+00	47	39
20	2022-10-26 14:26:37.124+00	2022-10-26 14:26:37.124+00	55	53
21	2022-10-26 14:42:31.518+00	2022-10-26 14:42:31.518+00	47	55
22	2022-10-26 16:22:13.347+00	2022-10-26 16:22:13.347+00	42	47
23	2022-10-26 16:24:52.036+00	2022-10-26 16:24:52.036+00	42	53
24	2022-10-26 16:33:43.652+00	2022-10-26 16:33:43.652+00	47	12
25	2022-10-26 17:56:18.592+00	2022-10-26 17:56:18.592+00	56	45
26	2022-10-26 18:18:37.864+00	2022-10-26 18:18:37.864+00	56	47
27	2022-10-26 18:29:50.034+00	2022-10-26 18:29:50.034+00	56	53
28	2022-10-27 07:09:00.604+00	2022-10-27 07:09:00.604+00	60	6
29	2022-10-27 07:11:09.861+00	2022-10-27 07:11:09.861+00	60	56
30	2022-10-27 07:43:30.254+00	2022-10-27 07:43:30.254+00	60	55
31	2022-10-27 11:45:16.673+00	2022-10-27 11:45:16.673+00	56	60
32	2022-10-27 13:41:52.226+00	2022-10-27 13:41:52.226+00	56	58
33	2022-10-27 13:49:01.619+00	2022-10-27 13:49:01.619+00	56	59
34	2022-10-27 14:06:11.644+00	2022-10-27 14:06:11.644+00	57	56
35	2022-10-27 14:07:20.246+00	2022-10-27 14:07:20.246+00	57	55
36	2022-10-27 14:23:02.7+00	2022-10-27 14:23:02.7+00	57	51
37	2022-10-28 05:14:48.985+00	2022-10-28 05:14:48.985+00	56	57
38	2022-10-28 10:16:39.43+00	2022-10-28 10:16:39.43+00	47	56
39	2022-10-28 14:35:31.462+00	2022-10-28 14:35:31.462+00	56	61
40	2022-10-28 15:47:22.241+00	2022-10-28 15:47:22.241+00	47	64
41	2022-10-29 18:06:14.506+00	2022-10-29 18:06:14.506+00	65	2
42	2022-10-29 18:07:46.788+00	2022-10-29 18:07:46.788+00	65	63
43	2022-10-29 22:37:50.598+00	2022-10-29 22:37:50.598+00	66	65
44	2022-10-29 22:41:40.505+00	2022-10-29 22:41:40.505+00	66	64
45	2022-10-29 22:42:07.562+00	2022-10-29 22:42:07.562+00	66	56
\.


--
-- Data for Name: user_searches; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public.user_searches (id, user_id, search_name, gps, other_location, location_by_city_state, occupations, job_title, min_distance, max_distannce, min_net_worth, max_net_worth, currency, viewed_me, unviewed, favorited, favorited_me, min_prefered_age, max_prefered_age, min_height, max_height, body_types, hair_colors, relationship_statuses, education, childrens, show_members_seeking, do_not_show_members_seeking, createdat, updatedat) FROM stdin;
\.


--
-- Data for Name: usersearches; Type: TABLE DATA; Schema: public; Owner: vyfkwzvwxlveon
--

COPY public.usersearches (id, user_id, search_name, gps, other_location, location_by_city_state, occupations, job_title, min_distance, max_distannce, min_net_worth, max_net_worth, currency, viewed_me, unviewed, favorited, favorited_me, min_prefered_age, max_prefered_age, min_height, max_height, body_types, hair_colors, relationship_statuses, education, childrens, show_members_seeking, do_not_show_members_seeking, createdat, updatedat) FROM stdin;
\.


--
-- Name: Blocks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public."Blocks_id_seq"', 12, true);


--
-- Name: BodyTypes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public."BodyTypes_id_seq"', 6, true);


--
-- Name: Children_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public."Children_id_seq"', 6, true);


--
-- Name: Education_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public."Education_id_seq"', 6, true);


--
-- Name: EmailVerificationTokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public."EmailVerificationTokens_id_seq"', 71, true);


--
-- Name: Ethnicities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public."Ethnicities_id_seq"', 8, true);


--
-- Name: ForgotPasswordTokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public."ForgotPasswordTokens_id_seq"', 31, true);


--
-- Name: HairColors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public."HairColors_id_seq"', 8, true);


--
-- Name: Likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public."Likes_id_seq"', 43, true);


--
-- Name: Occupations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public."Occupations_id_seq"', 11, true);


--
-- Name: RelationshipStatuses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public."RelationshipStatuses_id_seq"', 8, true);


--
-- Name: Reports_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public."Reports_id_seq"', 13, true);


--
-- Name: Roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public."Roles_id_seq"', 3, true);


--
-- Name: Tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public."Tags_id_seq"', 8, true);


--
-- Name: UserFcmTokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public."UserFcmTokens_id_seq"', 2, false);


--
-- Name: UserPhotos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public."UserPhotos_id_seq"', 46, true);


--
-- Name: UserPreferences_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public."UserPreferences_id_seq"', 49, true);


--
-- Name: UserProfiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public."UserProfiles_id_seq"', 54, true);


--
-- Name: UserStatuses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public."UserStatuses_id_seq"', 4, true);


--
-- Name: UserTags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public."UserTags_id_seq"', 432, true);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public."Users_id_seq"', 66, true);


--
-- Name: Views_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public."Views_id_seq"', 45, true);


--
-- Name: user_searches_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public.user_searches_id_seq', 1, false);


--
-- Name: usersearches_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vyfkwzvwxlveon
--

SELECT pg_catalog.setval('public.usersearches_id_seq', 1, false);


--
-- Name: Blocks Blocks_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Blocks"
    ADD CONSTRAINT "Blocks_pkey" PRIMARY KEY (id);


--
-- Name: BodyTypes BodyTypes_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."BodyTypes"
    ADD CONSTRAINT "BodyTypes_pkey" PRIMARY KEY (id);


--
-- Name: Children Children_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Children"
    ADD CONSTRAINT "Children_pkey" PRIMARY KEY (id);


--
-- Name: Education Education_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Education"
    ADD CONSTRAINT "Education_pkey" PRIMARY KEY (id);


--
-- Name: EmailVerificationTokens EmailVerificationTokens_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."EmailVerificationTokens"
    ADD CONSTRAINT "EmailVerificationTokens_pkey" PRIMARY KEY (id);


--
-- Name: Ethnicities Ethnicities_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Ethnicities"
    ADD CONSTRAINT "Ethnicities_pkey" PRIMARY KEY (id);


--
-- Name: ForgotPasswordTokens ForgotPasswordTokens_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."ForgotPasswordTokens"
    ADD CONSTRAINT "ForgotPasswordTokens_pkey" PRIMARY KEY (id);


--
-- Name: HairColors HairColors_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."HairColors"
    ADD CONSTRAINT "HairColors_pkey" PRIMARY KEY (id);


--
-- Name: Likes Likes_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Likes"
    ADD CONSTRAINT "Likes_pkey" PRIMARY KEY (id);


--
-- Name: Occupations Occupations_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Occupations"
    ADD CONSTRAINT "Occupations_pkey" PRIMARY KEY (id);


--
-- Name: RelationshipStatuses RelationshipStatuses_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."RelationshipStatuses"
    ADD CONSTRAINT "RelationshipStatuses_pkey" PRIMARY KEY (id);


--
-- Name: Reports Reports_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Reports"
    ADD CONSTRAINT "Reports_pkey" PRIMARY KEY (id);


--
-- Name: Roles Roles_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Roles"
    ADD CONSTRAINT "Roles_pkey" PRIMARY KEY (id);


--
-- Name: Tags Tags_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Tags"
    ADD CONSTRAINT "Tags_pkey" PRIMARY KEY (id);


--
-- Name: UserFcmTokens UserFcmTokens_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserFcmTokens"
    ADD CONSTRAINT "UserFcmTokens_pkey" PRIMARY KEY (id);


--
-- Name: UserPhotos UserPhotos_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserPhotos"
    ADD CONSTRAINT "UserPhotos_pkey" PRIMARY KEY (id);


--
-- Name: UserPreferences UserPreferences_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserPreferences"
    ADD CONSTRAINT "UserPreferences_pkey" PRIMARY KEY (id);


--
-- Name: UserProfiles UserProfiles_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserProfiles"
    ADD CONSTRAINT "UserProfiles_pkey" PRIMARY KEY (id);


--
-- Name: UserStatuses UserStatuses_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserStatuses"
    ADD CONSTRAINT "UserStatuses_pkey" PRIMARY KEY (id);


--
-- Name: UserTags UserTags_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserTags"
    ADD CONSTRAINT "UserTags_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_appleId_key; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_appleId_key" UNIQUE ("appleId");


--
-- Name: Users Users_appleId_key1; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_appleId_key1" UNIQUE ("appleId");


--
-- Name: Users Users_appleId_key10; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_appleId_key10" UNIQUE ("appleId");


--
-- Name: Users Users_appleId_key11; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_appleId_key11" UNIQUE ("appleId");


--
-- Name: Users Users_appleId_key2; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_appleId_key2" UNIQUE ("appleId");


--
-- Name: Users Users_appleId_key3; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_appleId_key3" UNIQUE ("appleId");


--
-- Name: Users Users_appleId_key4; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_appleId_key4" UNIQUE ("appleId");


--
-- Name: Users Users_appleId_key5; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_appleId_key5" UNIQUE ("appleId");


--
-- Name: Users Users_appleId_key6; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_appleId_key6" UNIQUE ("appleId");


--
-- Name: Users Users_appleId_key7; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_appleId_key7" UNIQUE ("appleId");


--
-- Name: Users Users_appleId_key8; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_appleId_key8" UNIQUE ("appleId");


--
-- Name: Users Users_appleId_key9; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_appleId_key9" UNIQUE ("appleId");


--
-- Name: Users Users_email_key; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key" UNIQUE (email);


--
-- Name: Users Users_email_key1; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key1" UNIQUE (email);


--
-- Name: Users Users_email_key10; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key10" UNIQUE (email);


--
-- Name: Users Users_email_key11; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key11" UNIQUE (email);


--
-- Name: Users Users_email_key12; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key12" UNIQUE (email);


--
-- Name: Users Users_email_key13; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key13" UNIQUE (email);


--
-- Name: Users Users_email_key14; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key14" UNIQUE (email);


--
-- Name: Users Users_email_key15; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key15" UNIQUE (email);


--
-- Name: Users Users_email_key16; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key16" UNIQUE (email);


--
-- Name: Users Users_email_key17; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key17" UNIQUE (email);


--
-- Name: Users Users_email_key18; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key18" UNIQUE (email);


--
-- Name: Users Users_email_key19; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key19" UNIQUE (email);


--
-- Name: Users Users_email_key2; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key2" UNIQUE (email);


--
-- Name: Users Users_email_key20; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key20" UNIQUE (email);


--
-- Name: Users Users_email_key21; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key21" UNIQUE (email);


--
-- Name: Users Users_email_key22; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key22" UNIQUE (email);


--
-- Name: Users Users_email_key23; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key23" UNIQUE (email);


--
-- Name: Users Users_email_key24; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key24" UNIQUE (email);


--
-- Name: Users Users_email_key25; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key25" UNIQUE (email);


--
-- Name: Users Users_email_key26; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key26" UNIQUE (email);


--
-- Name: Users Users_email_key27; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key27" UNIQUE (email);


--
-- Name: Users Users_email_key28; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key28" UNIQUE (email);


--
-- Name: Users Users_email_key29; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key29" UNIQUE (email);


--
-- Name: Users Users_email_key3; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key3" UNIQUE (email);


--
-- Name: Users Users_email_key30; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key30" UNIQUE (email);


--
-- Name: Users Users_email_key31; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key31" UNIQUE (email);


--
-- Name: Users Users_email_key32; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key32" UNIQUE (email);


--
-- Name: Users Users_email_key33; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key33" UNIQUE (email);


--
-- Name: Users Users_email_key34; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key34" UNIQUE (email);


--
-- Name: Users Users_email_key35; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key35" UNIQUE (email);


--
-- Name: Users Users_email_key36; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key36" UNIQUE (email);


--
-- Name: Users Users_email_key37; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key37" UNIQUE (email);


--
-- Name: Users Users_email_key38; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key38" UNIQUE (email);


--
-- Name: Users Users_email_key39; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key39" UNIQUE (email);


--
-- Name: Users Users_email_key4; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key4" UNIQUE (email);


--
-- Name: Users Users_email_key5; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key5" UNIQUE (email);


--
-- Name: Users Users_email_key6; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key6" UNIQUE (email);


--
-- Name: Users Users_email_key7; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key7" UNIQUE (email);


--
-- Name: Users Users_email_key8; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key8" UNIQUE (email);


--
-- Name: Users Users_email_key9; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key9" UNIQUE (email);


--
-- Name: Users Users_facebookId_key; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_facebookId_key" UNIQUE ("facebookId");


--
-- Name: Users Users_facebookId_key1; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_facebookId_key1" UNIQUE ("facebookId");


--
-- Name: Users Users_facebookId_key10; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_facebookId_key10" UNIQUE ("facebookId");


--
-- Name: Users Users_facebookId_key11; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_facebookId_key11" UNIQUE ("facebookId");


--
-- Name: Users Users_facebookId_key2; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_facebookId_key2" UNIQUE ("facebookId");


--
-- Name: Users Users_facebookId_key3; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_facebookId_key3" UNIQUE ("facebookId");


--
-- Name: Users Users_facebookId_key4; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_facebookId_key4" UNIQUE ("facebookId");


--
-- Name: Users Users_facebookId_key5; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_facebookId_key5" UNIQUE ("facebookId");


--
-- Name: Users Users_facebookId_key6; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_facebookId_key6" UNIQUE ("facebookId");


--
-- Name: Users Users_facebookId_key7; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_facebookId_key7" UNIQUE ("facebookId");


--
-- Name: Users Users_facebookId_key8; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_facebookId_key8" UNIQUE ("facebookId");


--
-- Name: Users Users_facebookId_key9; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_facebookId_key9" UNIQUE ("facebookId");


--
-- Name: Users Users_googleId_key; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_googleId_key" UNIQUE ("googleId");


--
-- Name: Users Users_googleId_key1; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_googleId_key1" UNIQUE ("googleId");


--
-- Name: Users Users_googleId_key10; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_googleId_key10" UNIQUE ("googleId");


--
-- Name: Users Users_googleId_key11; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_googleId_key11" UNIQUE ("googleId");


--
-- Name: Users Users_googleId_key2; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_googleId_key2" UNIQUE ("googleId");


--
-- Name: Users Users_googleId_key3; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_googleId_key3" UNIQUE ("googleId");


--
-- Name: Users Users_googleId_key4; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_googleId_key4" UNIQUE ("googleId");


--
-- Name: Users Users_googleId_key5; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_googleId_key5" UNIQUE ("googleId");


--
-- Name: Users Users_googleId_key6; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_googleId_key6" UNIQUE ("googleId");


--
-- Name: Users Users_googleId_key7; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_googleId_key7" UNIQUE ("googleId");


--
-- Name: Users Users_googleId_key8; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_googleId_key8" UNIQUE ("googleId");


--
-- Name: Users Users_googleId_key9; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_googleId_key9" UNIQUE ("googleId");


--
-- Name: Users Users_phoneNumber_key; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key1; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key1" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key10; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key10" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key11; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key11" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key12; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key12" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key13; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key13" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key14; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key14" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key15; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key15" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key16; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key16" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key17; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key17" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key18; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key18" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key19; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key19" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key2; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key2" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key20; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key20" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key21; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key21" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key22; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key22" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key23; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key23" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key24; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key24" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key25; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key25" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key26; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key26" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key27; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key27" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key28; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key28" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key29; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key29" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key3; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key3" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key30; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key30" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key31; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key31" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key32; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key32" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key33; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key33" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key34; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key34" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key35; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key35" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key36; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key36" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key37; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key37" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key38; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key38" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key39; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key39" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key4; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key4" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key5; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key5" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key6; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key6" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key7; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key7" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key8; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key8" UNIQUE ("phoneNumber");


--
-- Name: Users Users_phoneNumber_key9; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key9" UNIQUE ("phoneNumber");


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: Views Views_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Views"
    ADD CONSTRAINT "Views_pkey" PRIMARY KEY (id);


--
-- Name: user_searches user_searches_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public.user_searches
    ADD CONSTRAINT user_searches_pkey PRIMARY KEY (id);


--
-- Name: usersearches usersearches_pkey; Type: CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public.usersearches
    ADD CONSTRAINT usersearches_pkey PRIMARY KEY (id);


--
-- Name: Blocks Blocks_against_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Blocks"
    ADD CONSTRAINT "Blocks_against_fkey" FOREIGN KEY (against) REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Blocks Blocks_from_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Blocks"
    ADD CONSTRAINT "Blocks_from_fkey" FOREIGN KEY ("from") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: EmailVerificationTokens EmailVerificationTokens_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."EmailVerificationTokens"
    ADD CONSTRAINT "EmailVerificationTokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ForgotPasswordTokens ForgotPasswordTokens_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."ForgotPasswordTokens"
    ADD CONSTRAINT "ForgotPasswordTokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Likes Likes_from_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Likes"
    ADD CONSTRAINT "Likes_from_fkey" FOREIGN KEY ("from") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Likes Likes_to_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Likes"
    ADD CONSTRAINT "Likes_to_fkey" FOREIGN KEY ("to") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Reports Reports_against_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Reports"
    ADD CONSTRAINT "Reports_against_fkey" FOREIGN KEY (against) REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Reports Reports_from_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Reports"
    ADD CONSTRAINT "Reports_from_fkey" FOREIGN KEY ("from") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserPhotos UserPhotos_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserPhotos"
    ADD CONSTRAINT "UserPhotos_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserPreferences UserPreferences_bodyTypeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserPreferences"
    ADD CONSTRAINT "UserPreferences_bodyTypeId_fkey" FOREIGN KEY ("bodyTypeId") REFERENCES public."BodyTypes"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserPreferences UserPreferences_childrenId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserPreferences"
    ADD CONSTRAINT "UserPreferences_childrenId_fkey" FOREIGN KEY ("childrenId") REFERENCES public."Children"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserPreferences UserPreferences_educationId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserPreferences"
    ADD CONSTRAINT "UserPreferences_educationId_fkey" FOREIGN KEY ("educationId") REFERENCES public."Education"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserPreferences UserPreferences_ethnicityId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserPreferences"
    ADD CONSTRAINT "UserPreferences_ethnicityId_fkey" FOREIGN KEY ("ethnicityId") REFERENCES public."Ethnicities"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserPreferences UserPreferences_hairColorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserPreferences"
    ADD CONSTRAINT "UserPreferences_hairColorId_fkey" FOREIGN KEY ("hairColorId") REFERENCES public."HairColors"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserPreferences UserPreferences_occupationId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserPreferences"
    ADD CONSTRAINT "UserPreferences_occupationId_fkey" FOREIGN KEY ("occupationId") REFERENCES public."Occupations"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserPreferences UserPreferences_relationshipStatusId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserPreferences"
    ADD CONSTRAINT "UserPreferences_relationshipStatusId_fkey" FOREIGN KEY ("relationshipStatusId") REFERENCES public."RelationshipStatuses"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserPreferences UserPreferences_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserPreferences"
    ADD CONSTRAINT "UserPreferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserProfiles UserProfiles_bodyTypeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserProfiles"
    ADD CONSTRAINT "UserProfiles_bodyTypeId_fkey" FOREIGN KEY ("bodyTypeId") REFERENCES public."BodyTypes"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserProfiles UserProfiles_childrenId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserProfiles"
    ADD CONSTRAINT "UserProfiles_childrenId_fkey" FOREIGN KEY ("childrenId") REFERENCES public."Children"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserProfiles UserProfiles_educationId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserProfiles"
    ADD CONSTRAINT "UserProfiles_educationId_fkey" FOREIGN KEY ("educationId") REFERENCES public."Education"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserProfiles UserProfiles_ethnicityId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserProfiles"
    ADD CONSTRAINT "UserProfiles_ethnicityId_fkey" FOREIGN KEY ("ethnicityId") REFERENCES public."Ethnicities"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserProfiles UserProfiles_hairColorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserProfiles"
    ADD CONSTRAINT "UserProfiles_hairColorId_fkey" FOREIGN KEY ("hairColorId") REFERENCES public."HairColors"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserProfiles UserProfiles_occupationId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserProfiles"
    ADD CONSTRAINT "UserProfiles_occupationId_fkey" FOREIGN KEY ("occupationId") REFERENCES public."Occupations"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserProfiles UserProfiles_relationshipStatusId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserProfiles"
    ADD CONSTRAINT "UserProfiles_relationshipStatusId_fkey" FOREIGN KEY ("relationshipStatusId") REFERENCES public."RelationshipStatuses"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserProfiles UserProfiles_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserProfiles"
    ADD CONSTRAINT "UserProfiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserTags UserTags_tagId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserTags"
    ADD CONSTRAINT "UserTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES public."Tags"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserTags UserTags_userPreferenceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."UserTags"
    ADD CONSTRAINT "UserTags_userPreferenceId_fkey" FOREIGN KEY ("userPreferenceId") REFERENCES public."UserPreferences"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Views Views_from_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Views"
    ADD CONSTRAINT "Views_from_fkey" FOREIGN KEY ("from") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Views Views_to_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vyfkwzvwxlveon
--

ALTER TABLE ONLY public."Views"
    ADD CONSTRAINT "Views_to_fkey" FOREIGN KEY ("to") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: SCHEMA heroku_ext; Type: ACL; Schema: -; Owner: ueaqu3bk6imjkt
--

GRANT USAGE ON SCHEMA heroku_ext TO vyfkwzvwxlveon;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: vyfkwzvwxlveon
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON LANGUAGE plpgsql TO vyfkwzvwxlveon;


--
-- PostgreSQL database dump complete
--

