DROP DATABASE IF EXISTS nhl;
CREATE DATABASE nhl;

USE nhl;

CREATE TABLE players(
   PlayerID            INTEGER  NOT NULL PRIMARY KEY 
  ,Player            VARCHAR(24) NOT NULL
  ,Team              VARCHAR(13) NOT NULL
  ,Position          VARCHAR(4) NOT NULL
  ,GP                INTEGER  NOT NULL
  ,TOI               NUMERIC(15,11) NOT NULL
  ,CF                INTEGER  NOT NULL
  ,CA                INTEGER  NOT NULL
  ,CFP               NUMERIC(5,2) NOT NULL
  ,FF                INTEGER  NOT NULL
  ,FA                INTEGER  NOT NULL
  ,FFP               NUMERIC(5,2) NOT NULL
  ,SF                INTEGER  NOT NULL
  ,SA                INTEGER  NOT NULL
  ,SFP               NUMERIC(5,2) NOT NULL
  ,GF                INTEGER  NOT NULL
  ,GA                INTEGER  NOT NULL
  ,GFP               NUMERIC(5,2) NOT NULL
  ,xGF               NUMERIC(5,2) NOT NULL
  ,xGA               NUMERIC(5,2) NOT NULL
  ,xGFP              NUMERIC(5,2) NOT NULL
  ,SCF               INTEGER  NOT NULL
  ,SCA               INTEGER  NOT NULL
  ,SCFP              NUMERIC(5,2) NOT NULL
  ,HDCF              INTEGER  NOT NULL
  ,HDCA              INTEGER  NOT NULL
  ,HDCFP             NUMERIC(5,2) NOT NULL
  ,HDGF              INTEGER  NOT NULL
  ,HDGA              INTEGER  NOT NULL
  ,HDGFP             NUMERIC(6,2) NOT NULL
  ,MDCF              INTEGER  NOT NULL
  ,MDCA              INTEGER  NOT NULL
  ,MDCFP             NUMERIC(5,2) NOT NULL
  ,MDGF              INTEGER  NOT NULL
  ,MDGA              INTEGER  NOT NULL
  ,MDGFP             NUMERIC(6,2) NOT NULL
  ,LDCF              INTEGER  NOT NULL
  ,LDCA              INTEGER  NOT NULL
  ,LDCFP             NUMERIC(5,2) NOT NULL
  ,LDGF              INTEGER  NOT NULL
  ,LDGA              INTEGER  NOT NULL
  ,LDGFP             VARCHAR(6) NOT NULL
  ,OnIce_SH          NUMERIC(5,2) NOT NULL
  ,OnIce_SV          NUMERIC(5,2) NOT NULL
  ,PDO               NUMERIC(5,3) NOT NULL
  ,Off_Zone_Starts   INTEGER  NOT NULL
  ,Neu_Zone_Starts   INTEGER  NOT NULL
  ,Def_Zone_Starts   INTEGER  NOT NULL
  ,On_The_Fly_Starts INTEGER  NOT NULL
  ,Off_Zone_Start_   NUMERIC(5,2) NOT NULL
  ,Off_Zone_Faceoffs INTEGER  NOT NULL
  ,Neu_Zone_Faceoffs INTEGER  NOT NULL
  ,Def_Zone_Faceoffs INTEGER  NOT NULL
  ,Off_Zone_Faceoff_ NUMERIC(5,2) NOT NULL
);
