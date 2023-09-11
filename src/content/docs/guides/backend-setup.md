---
title: Backend Setup
description: Ein Guide zu Supabase
---

## Supabase

Die Basis für das Backend bildet die Backend-as-a-Service Plattform [Supabase](https://supabase.com/).
Dort steht eine vollständige PostgreSQL-Datenbank in der Cloud zur Verfügung.
Zusätzlich bietet Supabase eine REST-API und eine Realtime-API an, um auf die Datenbank zuzugreifen.
So kann pro Datenbanktabelle festgelegt werden, ob die Daten in Echtzeit oder standardmäßig abgerufen werden.

## Übersicht über die Tabellen

### users

| uid         | name        | email       | avatar_url  | gym     | points   |
|-------------|-------------|-------------|-------------|---------|----------|
| ``varchar`` | ``varchar`` | ``varchar`` | ``varchar`` | ``int`` | ``json`` |

### events

| id       | title       | date        | location    | userid      |
|----------|-------------|-------------|-------------|-------------|
| ``uuid`` | ``varchar`` | ``varchar`` | ``varchar`` | ``varchar`` |

### gym

| id      | name        | logo        | grades   | 
|---------|-------------|-------------|----------|
| ``int`` | ``varchar`` | ``varchar`` | ``json`` | 

### progress

| id       | useris      | gym     | progress | 
|----------|-------------|---------|----------|
| ``uuid`` | ``varchar`` | ``int`` | ``json`` |

### planer

| uid         | plan     | 
|-------------|----------|
| ``varchar`` | ``json`` | 
