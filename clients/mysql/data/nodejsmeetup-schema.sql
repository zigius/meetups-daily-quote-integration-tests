create table daily_quote
(
    `to`           varchar(200) not null,
    daily_quote    varchar(200) not null,
    insertion_date datetime     not null default CURRENT_TIMESTAMP
);
