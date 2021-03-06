USE [master]
GO
/****** Object:  Database [dbGame]    Script Date: 22.03.2022 17:38:57 ******/
CREATE DATABASE [dbGame]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'dbGame', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLSERVER2022\MSSQL\DATA\dbGame.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'dbGame_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLSERVER2022\MSSQL\DATA\dbGame_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [dbGame] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [dbGame].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [dbGame] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [dbGame] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [dbGame] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [dbGame] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [dbGame] SET ARITHABORT OFF 
GO
ALTER DATABASE [dbGame] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [dbGame] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [dbGame] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [dbGame] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [dbGame] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [dbGame] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [dbGame] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [dbGame] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [dbGame] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [dbGame] SET  ENABLE_BROKER 
GO
ALTER DATABASE [dbGame] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [dbGame] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [dbGame] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [dbGame] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [dbGame] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [dbGame] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [dbGame] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [dbGame] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [dbGame] SET  MULTI_USER 
GO
ALTER DATABASE [dbGame] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [dbGame] SET DB_CHAINING OFF 
GO
ALTER DATABASE [dbGame] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [dbGame] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [dbGame] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [dbGame] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [dbGame] SET QUERY_STORE = OFF
GO
USE [dbGame]
GO
/****** Object:  Table [dbo].[tblUsers]    Script Date: 22.03.2022 17:38:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblUsers](
	[username] [varchar](20) NULL,
	[age] [int] NULL,
	[password] [varchar](20) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblWords]    Script Date: 22.03.2022 17:38:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblWords](
	[word] [varchar](4) NULL,
	[wordlowercase] [varchar](4) NULL,
	[author] [varchar](20) NULL
) ON [PRIMARY]
GO
INSERT [dbo].[tblUsers] ([username], [age], [password]) VALUES (N'tom', 29, N'tom29')
INSERT [dbo].[tblUsers] ([username], [age], [password]) VALUES (N'dan', 22, N'dan22')
INSERT [dbo].[tblUsers] ([username], [age], [password]) VALUES (N'iryna', 25, N'iryna25')
INSERT [dbo].[tblUsers] ([username], [age], [password]) VALUES (N'james', 30, N'james30')
INSERT [dbo].[tblUsers] ([username], [age], [password]) VALUES (N'hanna', 25, N'hanna25')
INSERT [dbo].[tblUsers] ([username], [age], [password]) VALUES (N'sam', 44, N'sam44')
GO
INSERT [dbo].[tblWords] ([word], [wordlowercase], [author]) VALUES (N'cola', N'cola', N'tom')
INSERT [dbo].[tblWords] ([word], [wordlowercase], [author]) VALUES (N'rock', N'rock', N'james')
INSERT [dbo].[tblWords] ([word], [wordlowercase], [author]) VALUES (N'bull', N'bull', N'sam')
INSERT [dbo].[tblWords] ([word], [wordlowercase], [author]) VALUES (N'send', N'send', N'iryna')
INSERT [dbo].[tblWords] ([word], [wordlowercase], [author]) VALUES (N'life', N'life', N'iryna')
INSERT [dbo].[tblWords] ([word], [wordlowercase], [author]) VALUES (N'stop', N'stop', N'iryna')
GO
/****** Object:  StoredProcedure [dbo].[proc_AddWord]    Script Date: 22.03.2022 17:38:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[proc_AddWord](@uword varchar(4), @uwordlowercase varchar(4), @uauthor varchar(20))
as
begin
	insert into tblWords values (@uword, @uwordlowercase, @uauthor)
end
GO
/****** Object:  StoredProcedure [dbo].[proc_DeleteWord]    Script Date: 22.03.2022 17:38:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[proc_DeleteWord](@uword varchar(4))
as
begin
	delete from tblWords
	where @uword = wordlowercase;
end
GO
/****** Object:  StoredProcedure [dbo].[proc_GetAllUsers]    Script Date: 22.03.2022 17:38:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[proc_GetAllUsers]
as
begin
	select * from tblUsers
end
GO
/****** Object:  StoredProcedure [dbo].[proc_GetAllWords]    Script Date: 22.03.2022 17:38:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[proc_GetAllWords]
as
begin
	select * from tblWords
end
GO
/****** Object:  StoredProcedure [dbo].[proc_Login]    Script Date: 22.03.2022 17:38:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[proc_Login](@username varchar(20),@password varchar(20))
as
begin
	select * from tblUsers where @username = username and @password = password
end
GO
/****** Object:  StoredProcedure [dbo].[proc_RegUser]    Script Date: 22.03.2022 17:38:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[proc_RegUser](@uname varchar(20), @uage int, @upassword varchar(20))
as
begin
	insert into tblUsers values(@uname, @uage, @upassword)
end
GO
USE [master]
GO
ALTER DATABASE [dbGame] SET  READ_WRITE 
GO
