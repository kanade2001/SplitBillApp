# Pages

## /

[/page.tsx](../../frontend/src/app/page.tsx)

トップページ

現在は各ページへのブックマークとして利用

## /trip/

[/trip/page.tsx](../../frontend/src/app/trip/page.tsx)

trip一覧を表示

### Redirect

未ログインの場合はloginへリダイレクト

## /trip/[tripId]/

[/trip/[tripId]/page.tsx](../../frontend/src/app/trip/[tripId]/page.tsx)

tripの詳細ページ

### params

- tripId: ID for Trip

### SearchParams

- key: Public Key
- tab: Tab
  - settings

## /user/

[/user/pgae.tsx](../../frontend/src/app/user/page.tsx)

/trip/とコンフリクト(要修正)

## /user/login

[/user/login/page.tsx](../../frontend/src/app/user/login/page.tsx)

ログインページ

## /user/signup

[/user/signup/page.tsx](../../frontend/src/app/user/signup/page.tsx)

登録ページ
