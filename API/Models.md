# Data Models

データモデルはMiPAの`User`クラスなどを指します



## User

|name|type|description|
|---|---|---|
|id|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|ユーザーのID|
|name|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|ユーザーの一意の名前|
|nickname|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|ユーザーのニックネーム|
|host|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|ユーザーのいるインスタンス|
|avatar_url|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|ユーザーのアバターURL|
|is_admin|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|ユーザーが管理者か|
|is_moderator|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|ユーザーがモデレーターか|
|is_bot|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|ユーザーがBotか|
|is_cat|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|ユーザーが猫か|
|is_lady|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|ユーザーがお嬢様か [!badge variant="warning" text="Ayuskey only"]|
|emojis|[!badge variant="info" text="List[str]"] [!badge variant="primary" text="Default: None"]|ユーザーの名前などに含まれる絵文字の一覧|
|online_status|[!badge variant="info" text="str"] [!badge variant="primary" text="Default: None"]|ユーザーのオンライン状態 [!badge variant="warning" text="v12 or Ayuskey only"]|
|url|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|ユーザープロフィールへのURL|
|uri|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|ユーザープロフィールへのURI|
|created_at|[!badge variant="info" text="Optional[datetime]"] [!badge variant="primary" text="Default: None"]|ユーザーの作成日時|
|updated_at|[!badge variant="info" text="Any"] [!badge variant="primary" text="Default: None"]|ユーザーの更新日|
|is_locked|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|アカウントがロックされているか|
|is_silenced|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|ユーザーがサイレンスされているか|
|is_suspended|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|ユーザーが凍結されているか|
|description|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|ユーザーの自己紹介|
|location|[!badge variant="info" text="str"] [!badge variant="primary" text="Default: None"]|住んでる地域|
|birthday|[!badge variant="info" text="Any"] [!badge variant="primary" text="Default: None"]|ユーザーの誕生日|
|fields|[!badge variant="info" text="List[Any]"] [!badge variant="primary" text="Default: \[\]"]|ユーザーのフィールド欄|
|followers_count|[!badge variant="info" text="int"] [!badge variant="primary" text="Default: 0"]|ユーザーのフォロワー数|
|following_count|[!badge variant="info" text="int"] [!badge variant="primary" text="Default: 0"]|ユーザーのフォロー数|
|notes_count|[!badge variant="info" text="int"] [!badge variant="primary" text="Default: 0"]|ユーザーの投稿したノートの数|
|pinned_note_ids|[!badge variant="info" text="Any"] [!badge variant="primary" text="Default: \[\]"]|ピン止めされたノートのid|
|pinned_notes|[!badge variant="info" text="Any"] [!badge variant="primary" text="Default: \[\]"]|ToDo: ピン止めノート関係|
|pinned_page_id|[!badge variant="info" text="Any"] [!badge variant="primary" text="Default: \[\]"]|[!badge variant="warning" text="TODO"]|
|pinned_page|[!badge variant="info" text="Any"] [!badge variant="primary" text="Default: None"]|[!badge variant="warning" text="TODO"]|
|ff_visibility|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: public"]|[!badge variant="warning" text="TODO"]|
|is_follow|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|ユーザーをフォローしているか
|is_blocking|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|ユーザーをブロックしているか|
|is_blocked|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|ユーザーにブロックされてるか|
|is_muted|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|ユーザーをミュートしているか|
|details|[!badge variant="info" text="RawUserDetails"](/guides/rawmodels/#rawuserdetails)|ユーザーの詳細情報|
|instance|[!badge variant="info" text="Optional[Instance]"](#instance) [!badge variant="primary" text="Default: None"]|ユーザーのインスタンス情報|


## Instance

|name|type|description|
|---|---|---|
|host|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|インスタンスのホスト|
|name|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|インスタンス名|
|software_name|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|ソフトウェアの名前|
|software_version|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|ソフトウェアのバージョン|
|icon_url|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|インスタンスのアイコン|
|favicon_url|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|インスタンスのfavicon|
|theme_color|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|インスタンスの色|

## Note

|name|type|description|
|---|---|---|
|id|[!badge variant="info" text="str"]|ノートのID|
|created_at|[!badge variant="info" text="datetime"]|ノートの作成日時|
|user_id|[!badge variant="info" text="str"]|投稿したユーザーのID|
|author|[!badge variant="info" text="User"](#user)|投稿したユーザーのオブジェクト|
|content|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|投稿したノートの内容|
|cw|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|閲覧注意時の文字|
|renote|[!badge variant="info" text="Optional[Renote]"] [!badge variant="primary" text="Default: None"]|リノートしたオブジェクト|
|visibility|[!badge variant="info" text="str"] [!badge variant="primary" text="Default: None"]|ノートの公開範囲|
|renote_count|[!badge variant="info" text="Optional[int]"] [!badge variant="primary" text="Default: None"]|リノートされた数 [!badge variant="danger" text="要修正"]|
|replies_count|[!badge variant="info" text="Optional[int]"] [!badge variant="primary" text="Default: None"]|ノートに対する返信の数 [!badge variant="danger" text="要修正"]|
|reactions|[!badge variant="info" text="Dict[str, Any]"]|投稿に付いたリアクションのリスト|
|emojis|[!badge variant="info" text="List[RawEmoji]"] [!badge variant="primary" text="Default: \[\]"]|投稿に含まれる絵文字のリスト|
|file_ids|[!badge variant="info" text="Optional[List[str]]"] [!badge variant="primary" text="Default: None"]|添付されたファイルのIDリスト|
|files|[!badge variant="info" text="List[RawFile]"] [!badge variant="primary" text="Default: \[\]"]|添付されたファイルオブジェクトのリスト|
|reply_id|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|[!badge variant="warning" text="TODO"]|
|renote_id|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|[!badge variant="warning" text="TODO"]|
|poll|[!badge variant="info" text="Optional[RawPoll]"]|アンケートオブジェクト|
|visible_user_ids|[!badge variant="info" text="Optional[List[str]]"] [!badge variant="primary" text="Default: \[\]"]|投稿を見れるユーザーのID(ダイレクト投稿)|
|via_mobile|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|モバイルからの投稿。v12では廃止。m544は不明。 [!badge variant="warning" text="v11 only"]
|local_only|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|投稿を連合させない|
|extract_mentions|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|メンションを展開するか|
|extract_hashtags|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|ハッシュタグを展開するか|
|extract_emojis|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|絵文字を展開するか|
|preview|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|Ayuskeyで非推奨 [!badge variant="warning" text="Ayuskey or m544 only"]|
|media_ids|[!badge variant="info" text="Optional[List[str]]"] [!badge variant="primary" text="Default: None"]|添付されたファイルのIDリスト [!badge variant="danger" text="非推奨"]|
|field|[!badge variant="info" text="Optional[Dict[Any, Any]]"] [!badge variant="primary" text="Default: {}"]|[!badge variant="warning" text="TODO"]|
|tags|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|投稿のハッシュタグ|
|channel_id|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|投稿されたチャンネル [!badge variant="warning" text="v12 or Ayuskey only"]|

<!--
[!badge variant="warning" text="v11 only"]
[!badge variant="warning" text="Ayuskey only"]
[!badge variant="warning" text="v11 or m544 only"]
[!badge variant="warning" text="v12 only"]
[!badge variant="warning" text="v12 or Ayuskey only"]
[!badge variant="warning" text="Ayuskey or m544 only"]
[!badge variant="danger" text="要修正"]
[!badge variant="danger" text="非推奨"]
[!badge variant="warning" text="TODO"]
-->