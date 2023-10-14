--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4

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
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: blogs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.blogs (
    blog_id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    blog_title text NOT NULL,
    blog_content text NOT NULL,
    is_published boolean DEFAULT false,
    tags text[],
    category_id uuid,
    user_id uuid
);


ALTER TABLE public.blogs OWNER TO postgres;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    category_id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    category_type character varying(50) NOT NULL
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: comments_blogs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comments_blogs (
    comment_id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    blog_id uuid,
    user_id uuid,
    comment_value text NOT NULL
);


ALTER TABLE public.comments_blogs OWNER TO postgres;

--
-- Name: reactions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reactions (
    reaction_id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    reaction_type text NOT NULL
);


ALTER TABLE public.reactions OWNER TO postgres;

--
-- Name: reactions_mapping; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reactions_mapping (
    reactions_mapping_id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    user_id uuid,
    blog_id uuid,
    reaction_id uuid
);


ALTER TABLE public.reactions_mapping OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    first_name character varying(100) NOT NULL,
    last_name character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    user_password character varying(100) NOT NULL,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: blogs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.blogs (blog_id, blog_title, blog_content, is_published, tags, category_id, user_id) FROM stdin;
d56fafa9-bdd4-45c1-adef-eeae985b8360	Learn React in 5 minutes	<h2>Learn React</h2><p><br></p><p>People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.</p><ul><li>If you prefer to&nbsp;<strong>learn by doing</strong>, start with our&nbsp;<a href="https://legacy.reactjs.org/tutorial/tutorial.html" rel="noopener noreferrer" target="_blank" style="color: rgb(26, 26, 26); background-color: rgba(187, 239, 253, 0.3);">practical tutorial</a>.</li><li>If you prefer to&nbsp;<strong>learn concepts step by step</strong>, start with our&nbsp;<a href="https://legacy.reactjs.org/docs/hello-world.html" rel="noopener noreferrer" target="_blank" style="color: rgb(26, 26, 26); background-color: rgba(187, 239, 253, 0.3);">guide to main concepts</a>.</li></ul><p>Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you&nbsp;<em>will</em>&nbsp;get the hang of it.</p><h3><br></h3><h3>First Examples</h3><p><br></p><p>The&nbsp;<a href="https://legacy.reactjs.org/" rel="noopener noreferrer" target="_blank" style="color: rgb(26, 26, 26); background-color: rgba(187, 239, 253, 0.3);">React homepage</a>&nbsp;contains a few small React examples with a live editor. Even if you don’t know anything about React yet, try changing their code and see how it affects the result.</p><h3><br></h3><h3>React for Beginners</h3><p><br></p><p>If you feel that the React documentation goes at a faster pace than you’re comfortable with, check out&nbsp;<a href="https://www.taniarascia.com/getting-started-with-react/" rel="noopener noreferrer" target="_blank" style="color: rgb(26, 26, 26); background-color: rgba(187, 239, 253, 0.3);">this overview of React by Tania Rascia</a>. It introduces the most important React concepts in a detailed, beginner-friendly way. Once you’re done, give the documentation another try!</p><h3><br></h3><h3>React for Designers</h3><p><br></p><p>If you’re coming from a design background,&nbsp;<a href="https://reactfordesigners.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(26, 26, 26); background-color: rgba(187, 239, 253, 0.3);">these resources</a>&nbsp;are a great place to get started.</p><h3><br></h3><h3>JavaScript Resources</h3><p><br></p><p>The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time.</p><p>We recommend going through&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript" rel="noopener noreferrer" target="_blank" style="color: rgb(26, 26, 26); background-color: rgba(187, 239, 253, 0.3);">this JavaScript overview</a>&nbsp;to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.</p>	f	\N	7b2efbdf-901b-4b7c-bbfc-385960ca70a9	043b8ab9-0245-40ec-b605-720389c11994
c1e44e9b-5b1c-4d40-b8c4-d9f50e527731	Learn NodeJS	<h1>Introduction to JavaScript</h1><p>JavaScript is&nbsp;<strong>dynamically typed single-threaded interpreted</strong>&nbsp;languages for the Web. That means if you are doing web development, you can use this language to perform some operating on the web page, like running some JavaScript code when a button is clicked by the user.</p><p><br></p><p>JavaScript is a&nbsp;<strong>dynamically typed</strong>&nbsp;language which means a variable can hold any data type like String or Number in its lifetime and JavaScript interpreter won’t complain about it. It’s&nbsp;<strong>single-threaded</strong>&nbsp;which means your JavaScript code runs synchronously or sequentially line by line. It’s&nbsp;<strong>interpreted</strong>&nbsp;which means you don’t need to compile your JavaScript code.</p><p>JavaScript is interactive, which means you can directly feed JavaScript code to the interpreter and it will be executed immediately. You can try this by opening&nbsp;<a href="https://developers.google.com/web/tools/chrome-devtools/" rel="noopener noreferrer" target="_blank" style="color: inherit;"><strong>DevTools</strong></a>&nbsp;in the browser (<em>in Chrome, press&nbsp;</em><code style="background-color: rgb(242, 242, 242);"><strong><em>command</em></strong><em>&nbsp;+&nbsp;</em><strong><em>option</em></strong><em>&nbsp;+&nbsp;</em><strong><em>i</em></strong></code>) or&nbsp;<strong>right-click</strong>&nbsp;anywhere on the page and click&nbsp;<strong>inspect</strong>. Then go to the&nbsp;<strong>console</strong>&nbsp;tab, here you can type any valid JavaScript code and press enter to run it. Use&nbsp;<code style="background-color: rgb(242, 242, 242);">shift + enter</code>&nbsp;to add a new-line in your code.</p>	t	\N	7b2efbdf-901b-4b7c-bbfc-385960ca70a9	043b8ab9-0245-40ec-b605-720389c11994
914466e9-db24-4016-bda9-0541ce9e2469	React 	<p><strong>Gh</strong></p>	f	\N	79c80164-837a-4c54-85ee-314ab5d50e31	043b8ab9-0245-40ec-b605-720389c11994
88d04e90-bc84-43b1-97eb-caa118ca4a5f	How to get in your best shape?	<p>Whether it’s a New Year’s resolution, because your cloths are a bit tighter than you’d like or simply because you want to feel better and be healthier, we’ve all declared that we’re going to get in shape at one point or another.</p><p>Then comes the hard part of actually following through. Starting your healthy lifestyle journey isn’t always easy, but these seven tips for getting in shape can help you establish a sustainable routine to achieve you fitness goals.</p><ol><li><strong>Be Honest With Yourself</strong></li><li>Some people are committed to getting up early and working out in the morning, others prefer to work out after work. One isn’t better than the other, it’s all about what works best for you. You know yourself best, so be honest with yourself when making your workout plans. If you’re not naturally a morning person, you’re not really going to get up early to work out, especially if you’re not particularly fond of working out.</li><li>The same goes for revamping your eating habits. If you have a major sweet tooth you’ll be miserable if you try to cut out sweets entirely. You’re also not likely to succeed with a strict “no sweets” rule.</li><li>You’re trying to establish new, healthy habits, and&nbsp;<a href="http://www.huffingtonpost.com/james-clear/forming-new-habits_b_5104807.html" rel="noopener noreferrer" target="_blank" style="color: rgba(var(--color-link),var(--alpha-link));">establishing habits isn’t exactly easy</a>. Don’t make it harder on yourself by setting workout routine or healthy eating goals that don’t align with your personality.</li><li><strong>Set Realistic Goals</strong></li><li>When you’re new to working out and getting in shape, setting large goals can be daunting. Instead, start with smaller, more attainable goals like committing to 30 minutes of physical activity a day or working out three times a week.</li><li>If you’re not sure where to start, hire a personal trainer and discuss your goals; he or she will be able to help you create a plan to achieve those goals. When addressing your eating habits, talk to your doctor or a nutritionist to make sure the changes you make are healthy and in line with your desired results.</li><li><strong>Treat Your Workout like a Meeting</strong></li><li>You wouldn’t skip a work meeting or a doctor’s appointment, so treat your workout with the same commitment. When working out isn’t your favorite activity, it’s very easy to find excuses to skip it. Your friends want to meet up, you didn’t sleep well and could really use that extra 30 minutes – there are a million reasons to not work out.</li><li>Set your workout schedule and stick to it. If something comes up that interrupts one of your pre-planned workouts don’t just skip it, reschedule it.</li><li><strong>Find a Workout You Love</strong></li><li>It’s simple, you’re not going to be motivated to do something that you don’t like, but if there’s an exercise, workout or class you genuinely enjoy, you’ll be excited to do it.</li><li>If you hate running, find something else – don’t let that be the reason you stop trying to get in shape. Talk to your trainer about trying different machines, methods and exercises and look into taking a class. There are so many different types of workout classes now, from yoga and Pilates to spin and dance. Try out different ones and see if there’s something you really like.</li><li>You can also start playing a sport. If you loved soccer or basketball when you were younger, look into recreational teams or regular pickup games you can join. If there’s a sport you’ve always wanted to try, get out there and give it a go!</li><li>When you truly enjoy what you’re doing it won’t feel like work anymore.</li><li><strong>Find Your Motivation</strong></li><li>Everyone has different motivators and one the keys to sticking to your commitment to get in shape is to find yours.</li><li>If you work better when someone else holds you accountable, find a workout buddy to keep each other motivated and on track. If you need words of encouragement and accountability without a workout buddy, turn to your social media profiles and post about your progress. If your goal is to start playing a sport, run a marathon or get stronger, keep that goal in mind when you need a motivation boost. Reminding yourself that you’re working towards something that’s meaningful and important to you will help push you through the rough patches.</li><li><strong>Don’t Ignore Your Eating Habits</strong></li><li>If you have unhealthy eating habits, getting in shape will be exponentially harder – no matter how much you work out. While fad diets and quick-fix cleanses are tempting, they don’t lay the ground work for a sustainably healthy lifestyle.</li><li>Instead, commit to eating better and limiting your vices. Start with simple changes. If you’re an avid soda drinker, cut it out entirely or limit yourself to one can a day. If you find yourself at the fast food drive thru more often than not, go only once a week or commit to cooking at home at least five nights a week. Push yourself so that you make substantial changes, but don’t go so extreme that you won’t consistently follow through.</li><li><strong>Keep Going</strong></li><li>When it comes to working out and getting in shape, something is always better than nothing. When you feel like you’re going to slip, push yourself to do just a little bit. Do a quick 10-20 minute workout or order the healthiest option from the drive thru (and skip the fries). We’re not perfect but pushing just a little bit when you don’t want to will help keep you on track and make you feel good that you stuck to your commitment. (Just don’t make the bare minimum a habit!)</li></ol><p>Remind yourself that you’re doing all of this for a reason, and it’s a good one.&nbsp;Start using these tips for getting fit!&nbsp;While starting your new habits, purchase the&nbsp;<a href="https://flipbelt.com/products/flipbelt-classic-running-belt" rel="noopener noreferrer" target="_blank">Classic FlipBelt</a>&nbsp;to hold your gear while you exercise.</p>	t	\N	9b58ce65-7e72-41af-97dc-7e510b649944	043b8ab9-0245-40ec-b605-720389c11994
9ae31c9e-6416-44ac-b9cf-5008d3b248ec	Cable Pullover 101: The Only Guide You’ll Ever Need	<h1 class="ql-align-center"><span style="color: rgb(0, 55, 0);">How to do cable pullovers (Form &amp; Benefits)</span></h1><h3><strong style="color: rgb(230, 0, 0);">Go to the cable machine. And if all you have are short rope handles, use two of them at the same time so you can grab them on either side of your hips.</strong></h3><h3><strong style="color: rgb(230, 0, 0);">Stand with your feet about shoulder-width apart, but move back a bit if you wanna make it harder. Then bend your knees a little and lean forward at your hips, keeping your back straight and your shoulder blades locked in place by squeezing those muscles in your upper back.</strong></h3><h3><strong style="color: rgb(230, 0, 0);">Don’t forget to engage your hips too, to keep yourself stable. Now, pull that weight down, but keep your elbows slightly bent the whole time. T</strong></h3><h3><strong style="color: rgb(230, 0, 0);">ry to bring your elbows to your sides and behind your back to really feel it in your lats. Don’t cheat by using momentum though, we’re only interested in moving your upper arm bone and working those lats. And when you’re done with each rep, bring your arms back up with control.</strong></h3><h3><strong style="color: rgb(230, 0, 0);">If you’re struggling to keep good form, lower the weight a bit.</strong></h3><p><br></p>	t	\N	e3e5a03a-aad5-4c97-91fa-3a05d3377d33	3b92b143-bd89-4bd9-9708-6e91b18e1433
503e4af9-5369-4fce-b4b3-022af9b0f4eb	The Tao of the Gym Bro	<h2>The Tao of the Gym Bro: How it Works</h2><blockquote><em>First they ignore you.</em></blockquote><blockquote><em>Then they laugh at you.</em></blockquote><blockquote><em>Then they do a Stanford study.</em></blockquote><blockquote><em>Then they present it as cutting edge research.</em></blockquote><blockquote><strong><em>– Ghandi as paraphrased by the Gym Bro</em></strong></blockquote><p>The bros are at the gym. They’re all busy being bros, doing bro things, talking bro science.</p><p>Studies? They doin’t need studies. They’ve got bros who’ve handed down the wisdom of the Bro (capital B) over the years.</p><p>But the bros are not a particularly cultured group. They are large, muscled, and often heard grunting, yelling and exclaiming esoteric phrases like “LIGHT WEIGHT.” They do not have stacks of papers they’re referencing at the gym and they have no need – for in their multitude is contained the wisdom of the Bro.</p><p>This leads to sudden, often impromptu behavior including:</p><ul><li>Drop an extra scoop a pre-workout – just cause they’ve had a day – and they need a bump.</li><li>Hitting an extra set because they’re feeling it.</li><li>Doing a fasted cardio session to get out of their head</li></ul><p>This drives the science bros nuts. There’s no way that fitness according to the gym bro could be correct. They barely even know how to read (chill, gym bros).</p><p>So it’s dismissed out of hand – as bro-science – typically by those not in the gym and those not eating their 1g per pound of bodyweight/day in protein.</p><p>But then, it happens.</p>	t	{health,fitness,"mental peace"}	cd0b4e4a-b01b-45fd-9002-e1986a0f8acb	3b92b143-bd89-4bd9-9708-6e91b18e1433
dd850c49-89bb-4959-a64f-bb8d157de68a	How to a awesome presentation?	<p>do hardwork</p>	t	{hardwork}	3df0b1eb-96d7-49b9-b852-ea1872cf0d88	100e5cce-4978-482b-9f78-ef7d30d6c300
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (category_id, category_type) FROM stdin;
7dec042c-6a6c-4805-9840-edd769b13081	Drama
1aa0445e-d227-4fa7-b530-9974ca003c82	Action
a78f2345-fb7f-4933-af84-000538b20b69	Adventure
7b1c488f-5478-40b0-9035-444b7c827f0f	Fantasy
8b1bf803-226c-4066-adaf-703604731b3b	Mystery
5b673960-8753-4ca8-a531-f5a06b8551ce	Horror
2ab2004b-8907-4d05-ad7e-24c389503e3d	Romance
3df0b1eb-96d7-49b9-b852-ea1872cf0d88	Documentary
66540a7c-fa22-4ee1-ad25-e5294486b08d	History
658c3a0c-8bc2-4c7f-9394-9d292f30045a	Biography
e3e5a03a-aad5-4c97-91fa-3a05d3377d33	Music
9b58ce65-7e72-41af-97dc-7e510b649944	Sports
eff8d6a5-ff63-4076-85c2-664e225b16b9	News
1fe85249-8f5e-4669-9812-3ba021de48b4	Education
171d726d-9090-48d4-b405-2cf7ee74792c	Food & Cooking
cd0b4e4a-b01b-45fd-9002-e1986a0f8acb	Science Fiction
e855fe0a-2610-41ff-930e-bc510d57df60	Space Exploration
c11fb706-9ddd-4871-939c-a76bf1426805	Time Travel
adf63713-37fa-4bf0-8bab-7c67386d1198	Aliens
7b2efbdf-901b-4b7c-bbfc-385960ca70a9	Technology
79c80164-837a-4c54-85ee-314ab5d50e31	Programming
e3f933e5-fe90-4935-823d-b60383b3264d	Gadgets
6e60e6ed-f1ae-4f7f-a279-133dd2bd5a84	AI & Machine Learning
e80522ff-1a0d-47ec-b89d-b1b8fa1cf450	Cybersecurity
\.


--
-- Data for Name: comments_blogs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comments_blogs (comment_id, blog_id, user_id, comment_value) FROM stdin;
a91500f9-b509-4b13-9318-25f3c3cdef8c	503e4af9-5369-4fce-b4b3-022af9b0f4eb	3b92b143-bd89-4bd9-9708-6e91b18e1433	Amazing Blog........Must Read
729cd35d-2e6b-4d1b-9ace-26337453a6db	c1e44e9b-5b1c-4d40-b8c4-d9f50e527731	3b92b143-bd89-4bd9-9708-6e91b18e1433	Nice Blog ...really helped to clear my concept
55154e73-34aa-4462-9e8b-33dd5c3c5284	503e4af9-5369-4fce-b4b3-022af9b0f4eb	7368c7be-426f-44da-aa7b-92571bac0923	Thanks for the blog Jatin....👌
cf5e1702-f9dd-4240-a12e-a4bca00c530e	503e4af9-5369-4fce-b4b3-022af9b0f4eb	043b8ab9-0245-40ec-b605-720389c11994	Must Read💯
075c4de1-6426-43a5-a273-75b3db4e1029	503e4af9-5369-4fce-b4b3-022af9b0f4eb	043b8ab9-0245-40ec-b605-720389c11994	Nice Blog
d87d7ce7-cce6-45ad-9c8d-bf15ac1d13d9	503e4af9-5369-4fce-b4b3-022af9b0f4eb	3b92b143-bd89-4bd9-9708-6e91b18e1433	Well Said
ba4bdfe9-d694-4ba0-b7fa-04db95c16e80	dd850c49-89bb-4959-a64f-bb8d157de68a	7368c7be-426f-44da-aa7b-92571bac0923	Thank You Raj😀
\.


--
-- Data for Name: reactions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reactions (reaction_id, reaction_type) FROM stdin;
5035a4f2-ad12-4f58-8d3e-efe8bcac0bc9	heart
abf5c33d-efcc-45eb-9188-46b4ef1057fa	clap
34a31612-db79-48f8-945b-9ac807c1bd52	fire
6739e2cd-e537-405d-8d2a-9983a3f4dc74	ok_hand
84cd0d36-7aab-469f-8706-8179011f7460	x
\.


--
-- Data for Name: reactions_mapping; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reactions_mapping (reactions_mapping_id, user_id, blog_id, reaction_id) FROM stdin;
76230c85-49f4-4aee-a042-6b9878abd3c5	043b8ab9-0245-40ec-b605-720389c11994	503e4af9-5369-4fce-b4b3-022af9b0f4eb	5035a4f2-ad12-4f58-8d3e-efe8bcac0bc9
0877d15c-4f62-49bf-b2aa-aefe6aeacf1e	800e6d30-af77-40d1-b865-8765b2048397	503e4af9-5369-4fce-b4b3-022af9b0f4eb	5035a4f2-ad12-4f58-8d3e-efe8bcac0bc9
28a1a142-477c-464d-8d3d-cda49cd48193	800e6d30-af77-40d1-b865-8765b2048397	503e4af9-5369-4fce-b4b3-022af9b0f4eb	abf5c33d-efcc-45eb-9188-46b4ef1057fa
85393833-6762-4862-a598-a1df48bde365	7368c7be-426f-44da-aa7b-92571bac0923	503e4af9-5369-4fce-b4b3-022af9b0f4eb	5035a4f2-ad12-4f58-8d3e-efe8bcac0bc9
131d328d-b0ba-4b08-8aa9-391c8d168319	7368c7be-426f-44da-aa7b-92571bac0923	503e4af9-5369-4fce-b4b3-022af9b0f4eb	abf5c33d-efcc-45eb-9188-46b4ef1057fa
00294811-8a45-44e3-8b01-f6c9047d29e1	7368c7be-426f-44da-aa7b-92571bac0923	503e4af9-5369-4fce-b4b3-022af9b0f4eb	34a31612-db79-48f8-945b-9ac807c1bd52
07edc0ef-256d-43fc-b506-143e52a0311c	7368c7be-426f-44da-aa7b-92571bac0923	503e4af9-5369-4fce-b4b3-022af9b0f4eb	6739e2cd-e537-405d-8d2a-9983a3f4dc74
91fd5870-920e-4db6-9c13-082a8638dc5c	7368c7be-426f-44da-aa7b-92571bac0923	503e4af9-5369-4fce-b4b3-022af9b0f4eb	84cd0d36-7aab-469f-8706-8179011f7460
83ef43a3-3045-4bef-8a1f-3c7fa0acc117	7368c7be-426f-44da-aa7b-92571bac0923	503e4af9-5369-4fce-b4b3-022af9b0f4eb	5035a4f2-ad12-4f58-8d3e-efe8bcac0bc9
e23e03ea-09e8-4e64-9af6-55cb478588ae	7368c7be-426f-44da-aa7b-92571bac0923	503e4af9-5369-4fce-b4b3-022af9b0f4eb	84cd0d36-7aab-469f-8706-8179011f7460
b615e8c8-79b4-4974-ae3d-bbfd8cd7c263	7368c7be-426f-44da-aa7b-92571bac0923	503e4af9-5369-4fce-b4b3-022af9b0f4eb	5035a4f2-ad12-4f58-8d3e-efe8bcac0bc9
a35ef4a2-4bcd-45c2-8803-9e7a0e1f6663	7368c7be-426f-44da-aa7b-92571bac0923	503e4af9-5369-4fce-b4b3-022af9b0f4eb	34a31612-db79-48f8-945b-9ac807c1bd52
a6ded149-86e4-4a55-b2bb-c3175f75acd8	7368c7be-426f-44da-aa7b-92571bac0923	503e4af9-5369-4fce-b4b3-022af9b0f4eb	abf5c33d-efcc-45eb-9188-46b4ef1057fa
10c6c338-a370-43c5-b11e-70bbbd2a2070	7368c7be-426f-44da-aa7b-92571bac0923	503e4af9-5369-4fce-b4b3-022af9b0f4eb	84cd0d36-7aab-469f-8706-8179011f7460
579d7234-6015-4137-8244-c7f2a53710a9	7368c7be-426f-44da-aa7b-92571bac0923	503e4af9-5369-4fce-b4b3-022af9b0f4eb	5035a4f2-ad12-4f58-8d3e-efe8bcac0bc9
7e6b2af5-0c0b-405c-a900-770c78a80480	7368c7be-426f-44da-aa7b-92571bac0923	503e4af9-5369-4fce-b4b3-022af9b0f4eb	abf5c33d-efcc-45eb-9188-46b4ef1057fa
7d6f9e63-aaa9-4fa8-b5de-a183a4e73e24	7368c7be-426f-44da-aa7b-92571bac0923	503e4af9-5369-4fce-b4b3-022af9b0f4eb	34a31612-db79-48f8-945b-9ac807c1bd52
c6696cdb-4876-4328-934f-8b9fda280a8d	7368c7be-426f-44da-aa7b-92571bac0923	503e4af9-5369-4fce-b4b3-022af9b0f4eb	6739e2cd-e537-405d-8d2a-9983a3f4dc74
0bd602b7-e8d1-4cf2-9b2c-0118ff1c3807	7368c7be-426f-44da-aa7b-92571bac0923	503e4af9-5369-4fce-b4b3-022af9b0f4eb	84cd0d36-7aab-469f-8706-8179011f7460
375be820-bc71-4d49-9d03-8edc570aaa4d	7368c7be-426f-44da-aa7b-92571bac0923	503e4af9-5369-4fce-b4b3-022af9b0f4eb	84cd0d36-7aab-469f-8706-8179011f7460
0b63c434-521c-4321-95b3-1853661c4d4f	7368c7be-426f-44da-aa7b-92571bac0923	503e4af9-5369-4fce-b4b3-022af9b0f4eb	84cd0d36-7aab-469f-8706-8179011f7460
8219891e-59b9-469d-86a5-a7731286214d	7368c7be-426f-44da-aa7b-92571bac0923	503e4af9-5369-4fce-b4b3-022af9b0f4eb	84cd0d36-7aab-469f-8706-8179011f7460
536a5f3b-6243-4846-9618-1b6dcd873d9b	7368c7be-426f-44da-aa7b-92571bac0923	dd850c49-89bb-4959-a64f-bb8d157de68a	5035a4f2-ad12-4f58-8d3e-efe8bcac0bc9
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (user_id, first_name, last_name, email, user_password, created_at) FROM stdin;
800e6d30-af77-40d1-b865-8765b2048397	pratham	thakkar	pt@gmail.com	1234	2023-09-14 11:17:08.873725+05:30
5ee1e192-c4c4-4c7c-9469-d74807a1d3cf	ayush	ghiya	ag@ts.com	$2b$10$REQ3A6IKid8qq8hwCZWWhOenf0b1rop.fzZY34UswvvjqRVuXkiTu	2023-09-15 15:25:04.276007+05:30
3b92b143-bd89-4bd9-9708-6e91b18e1433	Jatin	Vatsa	jatin.vatsa+1@talentsytems.com	$2b$10$wBwwXa2/v4XG/QmBZKFquOKgGfevPtjY6p8iuXMJjv5d4FKLKtDXy	2023-09-15 16:59:20.512708+05:30
936b3ac0-dce1-4673-844e-bc28edabe5de	test	1	test1@gmail.com	$2b$10$sPoj5BlPNOa3ysf5XL5aX.os62hTetR6mPM6YVcVt7oEozvkxHM2S	2023-09-15 17:55:01.347895+05:30
eeb9456b-8359-47b2-9e28-6e23aa2f139c	test	2	test2@gmail.com	$2b$10$h/Stq29YHMdjIrscKDNMAuo2YqOf3g/BQAU4.SZMtbxl4ag4uzxvy	2023-09-16 16:48:30.92264+05:30
77463d71-0b0a-4805-8588-99c492c6934c	Pratham	Thakkar	test3@gmail.com	$2b$10$5aLbRIORJ9Kvrb4P27EedeScj1d775G.9CMcX7bH0vJIogZEtqIqC	2023-09-16 16:56:00.253847+05:30
0322d104-27cc-4b81-825a-52118336b18f	test	4	test4@gmail.com	$2b$10$YAtsEFFYWdjcjQCo4mmqyenOXJ4Tq5OwCdPn9JxWMRIAeJB1FJ/nq	2023-09-16 17:01:52.206085+05:30
83aecbdc-00f8-41d0-ba71-b323fc8d594a	test	5	test5@gmail.com	$2b$10$x5NcwJRmJQuCrANnAjwbzuZj17gFzdJ21nhYVyTJG4uIOWrhyb45m	2023-09-16 17:04:53.496999+05:30
795b5dfa-b808-4505-8b7f-6820144bf16c	test	6	test6@gmail.com	$2b$10$kVIOjKZhZcXFfy4KmlMif.tew9QbCMFROuvyxJPmyaRj8KYxnuwaS	2023-09-16 17:07:32.220389+05:30
879255b5-6b88-4c33-84c4-59042d5c8bd7	test	7	test7@gmail.com	$2b$10$wCMpIofYj7kAk/cU7y3RZeLIdBRVWSHkSwQ8O2d.FD2fpeL1kOOhW	2023-09-16 17:11:04.422849+05:30
dca4b7ff-e8d9-4ce2-84ed-87f2e021f40c	test 	8	test8@gmail.com	$2b$10$oNCaMWIAMWY8wx2nCjvfNunRVXYmjZ9nSii8JZ9ebyP6hWgw6.xLy	2023-09-16 17:13:33.900844+05:30
c5083cd8-b874-4cc2-8482-4e34cd4dfde7	test 	9	test9@gmail.com	$2b$10$tzbTJXdUpyywCXX/MfBadeEiDbo1gyv6bvtNCR4IIY81rLXzE01xW	2023-09-16 17:42:26.681504+05:30
043b8ab9-0245-40ec-b605-720389c11994	Vrunda	Shah	vs@gmail.com	$2b$10$J8n79JrvMr5YmtXmcqUkv.KyxwwbNsTTg2j0XBBcOf1EEX7NEztxy	2023-09-16 22:23:20.066146+05:30
100e5cce-4978-482b-9f78-ef7d30d6c300	Raj	Dave	rd@ts.com	$2b$10$qAhtSW.qlyiIsT4yOmVz3uzceC3k2xaaWNWECfDoAQwbCtApMmv4a	2023-09-21 15:19:39.305149+05:30
7368c7be-426f-44da-aa7b-92571bac0923	Pratham	Thakkar	itsthakkarpratham@gmail.com	$2b$10$RY5KO0LuD7Bd2SZLPndOa.ySFPhYThFk3sB7YQUJVlLirCYwja3hy	2023-09-25 11:22:05.926769+05:30
\.


--
-- Name: blogs blogs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT blogs_pkey PRIMARY KEY (blog_id);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (category_id);


--
-- Name: comments_blogs comments_blogs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments_blogs
    ADD CONSTRAINT comments_blogs_pkey PRIMARY KEY (comment_id);


--
-- Name: reactions_mapping reactions_mapping_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reactions_mapping
    ADD CONSTRAINT reactions_mapping_pkey PRIMARY KEY (reactions_mapping_id);


--
-- Name: reactions reactions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reactions
    ADD CONSTRAINT reactions_pkey PRIMARY KEY (reaction_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: blogs blogs_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT blogs_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(category_id);


--
-- Name: blogs blogs_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT blogs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- Name: comments_blogs comments_blogs_blog_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments_blogs
    ADD CONSTRAINT comments_blogs_blog_id_fkey FOREIGN KEY (blog_id) REFERENCES public.blogs(blog_id);


--
-- Name: comments_blogs comments_blogs_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments_blogs
    ADD CONSTRAINT comments_blogs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- Name: reactions_mapping reactions_mapping_blog_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reactions_mapping
    ADD CONSTRAINT reactions_mapping_blog_id_fkey FOREIGN KEY (blog_id) REFERENCES public.blogs(blog_id);


--
-- Name: reactions_mapping reactions_mapping_reaction_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reactions_mapping
    ADD CONSTRAINT reactions_mapping_reaction_id_fkey FOREIGN KEY (reaction_id) REFERENCES public.reactions(reaction_id);


--
-- Name: reactions_mapping reactions_mapping_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reactions_mapping
    ADD CONSTRAINT reactions_mapping_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- PostgreSQL database dump complete
--

