# REST API를 활용한 Todo APP 만들기

자바스크립트 Deep Dive 의 프로젝트중 REST API와 TodoApp 구현 해보기

## 목표

- Todo CRUD
- REST API
- 알람기능?
- Cloud DB 활용하기(MongoDB vs SupaBase)
- 회원가입 및 인증 적용해보기(JWT)

## 개발환경

- API : Node.js(v20.12.0 LTS) + Express.js
- Client : vite React

## 진행상황

- 인-메모리 형태로 Todo App 구현 완료
- Cloud DB 적용해보기 : supabase 적용 완료
- 일부 스타일 수정 및 모달형태 삭제 구현 완료
- 회원DB를 생성해 회원가입, 로그인 페이지네이션 구현해보기
- 이후 회원DB와 할일DB를 연동하여 로그인시 회원마다 등록한 할일을 연동하여 보여주게 처리하고자 함
- Github Pages를 이용해 빌드 및 배포하기

> Cloud DB를 이용하기 위해서는 로컬 API를 SupaBase나 MongoDB Atlas에서 제공하는 API를 사용해야하므로, 로컬에서 개발한 API는 더이상 필요하지 않게 됨
> supabse를 적용하여 cloud DB로 할일을 기록할수 있게 함
> 페이지별 라우팅 처리(react-router-dom)