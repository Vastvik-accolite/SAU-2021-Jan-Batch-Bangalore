create database cricket_world_cup;

/* creating table 'teams' */
create table teams(
 team_id varchar(3),
 team_name varchar(20),
 total_runs_scored int,
 total_wickets_taken int,
 matches_played int,
 primary key (team_id)
);

/*Inserting values in 'teams'*/
insert into teams (team_id, team_name) values ('IND', 'India');
insert into teams (team_id, team_name) values ('AUS', 'Australia');
insert into teams (team_id, team_name) values ('ENG', 'England');
insert into teams (team_id, team_name) values ('RSA', 'South Africa');

update teams set total_runs_scored=720, total_wickets_taken=25, matches_played = 3 where team_id="RSA";
update teams set total_runs_scored=832, total_wickets_taken=25, matches_played = 3 where team_id="IND";
update teams set total_runs_scored=759, total_wickets_taken=28, matches_played = 3 where team_id="AUS";
update teams set total_runs_scored=700, total_wickets_taken=22, matches_played = 3 where team_id="ENG";


/* creating table 'players' */
create table players(
	player_id int,
    team_id varchar(3),
    player_name varchar(30),
    matches_played int,
    runs_scored int,
    wickets_taken int,
    primary key(player_id),
    foreign key(team_id) references teams(team_id)
);

/*Insert into players*/

insert into players values(10, 'IND', 'Virat Kohli', 3, 237, 0);
insert into players values(7, 'IND', 'Bumrah', 3, 15, 4);
insert into players values(2, 'ENG', 'Stuart Broad', 2, 8, 3);
insert into players values(17, 'ENG', 'Joe Root', 3, 184, 0);
insert into players values(9, 'AUS', 'Adam Gilchrist', 3, 199, 0);
insert into players values(13, 'AUS', 'Glenn Mcgrath', 3, 23, 6);
insert into players values(4, 'RSA', 'ABD', 2, 175, 0);
insert into players values(5, 'RSA', 'Dale Steyn', 2, 4, 5);


/* creating table 'points_table' */

create table points_table(
	team_id varchar(3),
    team_position int unique not null,
    total_matches_played int,
    total_matches_won int,
    total_matches_lost int,
    net_run_rate float,
    primary key(team_id),
    foreign key(team_id) references teams(team_id)
);

/*Inserting into points_table*/

insert into points_table values('IND', 1, 3, 3, 0, +1.100);
insert into points_table values('AUS', 2, 3, 2, 1, +0.450);
insert into points_table values('RSA', 3, 3, 2, 1, +0.120);
insert into points_table values('ENG', 4, 3, 1, 2, -0.980);


/* creating table 'worldcup_schedule' */

create table worldcup_schedule(
	match_id int not null auto_increment,
    match_date date,
    first_team_id varchar(3),
    second_team_id varchar(3),
    winning_team_id varchar(3),
    first_team_score int,
    second_team_score int,
    primary key(match_id)
);

/*Insert into worldcup_schedule*/

insert into worldcup_schedule(match_date, first_team_id, second_team_id, winning_team_id, first_team_score, second_team_score) values('2021-01-03', 'IND', 'ENG', 'IND',310, 295);
insert into worldcup_schedule(match_date, first_team_id, second_team_id, winning_team_id, first_team_score, second_team_score) values('2021-01-04', 'RSA', 'ENG', 'RSA', 285, 282);
insert into worldcup_schedule(match_date, first_team_id, second_team_id, winning_team_id, first_team_score, second_team_score) values('2021-01-05', 'IND', 'RSA', 'IND', 302, 299);
insert into worldcup_schedule(match_date, first_team_id, second_team_id, winning_team_id, first_team_score, second_team_score) values('2021-01-06', 'ENG', 'AUS', 'ENG', 332, 320);
insert into worldcup_schedule(match_date, first_team_id, second_team_id, winning_team_id, first_team_score, second_team_score) values('2021-01-07', 'AUS', 'RSA', 'AUS', 265, 198);
insert into worldcup_schedule(match_date, first_team_id, second_team_id, winning_team_id, first_team_score, second_team_score) values('2021-01-08', 'IND', 'AUS', 'IND', 210, 127);


/*Fetch the top 5 batsmen who scored the maximum runs.*/
select * from players order by runs_scored desc limit 5;


/*Fetch the top 5 bowlers who has taken the maximum wickets.*/
select * from players order by wickets_taken desc limit 5;


/*Fetch the average score scored by each team considering the matches played.*/
select team_id, team_name, total_runs_scored/matches_played as Average_Score from teams order by Average_Score desc;


/*Increase the scores of each batsmen in the team, which has the least average computed in Step 6, by 10 runs.*/
update players set runs_scored = runs_scored + 10 where team_id =
(select team_id as Average_Score from teams order by total_runs_scored/matches_played limit 1);


/*Create a procedure which takes country as the input and gives the highest score of the country up to date, as output*/

DELIMITER $$

DROP PROCEDURE IF EXISTS HighestScore$$
CREATE PROCEDURE HighestScore(country VARCHAR(3), OUT highest INT)
BEGIN
    select  max(if(first_team_id = country, first_team_score, second_team_score)) into highest from worldcup_schedule where match_id in (select match_id from worldcup_schedule where first_team_id = country or second_team_id = country);

END$$

DELIMITER ;

call highestScore('IND', @highest);
select @highest;
