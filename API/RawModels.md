# RawModels

生のデータモデルは`.action`などの動作を持たないデータクラスです

!!!danger
基本的にこれらのクラスはユーザーによって新規に作成されることを想定していません。
正常に動作しない場合があることを予めご了承ください。
!!!

## ユーザー関連

### RawUser

+++ :icon-code: Source
```py
from mipac.core.models import RawUser

user = RawUser(data)
print(user.id)
```
+++ :icon-play: Demo
```bash
>>> 1234567890
```
+++

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
|details|[!badge variant="info" text="RawUserDetails"](/api/rawmodels/#rawuserdetails)|ユーザーの詳細情報|
|instance|[!badge variant="info" text="Optional[RawInstance]"](#rawinstance) [!badge variant="primary" text="Default: None"]|ユーザーのインスタンス情報|

### RawUserDetails

**import** `from mipac.core.models import RawUserDetails`

|name|type|description|
|---|---|---|
|avatar_blurhash|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|TODO[!badge variant="warning" text="v12 or Ayuskey only"]|
|avatar_color|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|TODO|
|banner_url|[!badge variant="info" text="Any"] [!badge variant="primary" text="Default: None"]|TODO|
|banner_color|[!badge variant="info" text="Any"] [!badge variant="primary" text="Default: None"]|TODO|
|two_factor_enabled|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|二段認証を使用しているか|
|use_password_less_login|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|パスワードレスログインを使用しているか|
|security_keys|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|セキュリティ－キーを使用しているか|
|has_pending_follow_request_from_you|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|あなたからのフォローリクエストがあるか|
|has_pending_follow_request_to_you|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|保留中のフォローリクエストがあるか|
|public_reactions|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|リアクションを他人に見せるか [!badge variant="warning" text="v12 only?"]|
|lang|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|ユーザーの言語 [!badge variant="warning" text="v11 or m544 only"]|

## インスタンス関連

### RawInstance

**import** `from mipac.core.models import RawInstance`

|name|type|description|
|---|---|---|
|host|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|インスタンスのホスト|
|name|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|インスタンス名|
|software_name|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|ソフトウェアの名前|
|software_version|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|ソフトウェアのバージョン|
|icon_url|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|インスタンスのアイコン|
|favicon_url|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|インスタンスのfavicon|
|theme_color|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|インスタンスの色|

## 投稿関連

### RawRenotes

**import** `from mipac.core.models import RawRenotes`

|name|type|description|
|---|---|---|
|id|[!badge variant="info" text="str"]|リノートのID|
|created_at|[!badge variant="info" text="datetime"]|リノートを作成した日時|
|user_id|[!badge variant="info" text="str"]|リノートしたユーザーのID|
|user|[!badge variant="info" text="RawUser"](#rawuser)|リノートした生のユーザーオブジェクト|
|content|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|リノートの内容|
|cw|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|閲覧注意時の文字|
|visibility|[!badge variant="info" text="str"] [!badge variant="primary" text="Default: None"]|ノートの公開範囲|
|renote_count|[!badge variant="info" text="Optional[int]"] [!badge variant="primary" text="Default: 0"]|リノートされた数|
|replies_count|[!badge variant="info" text="Optional[int]"] [!badge variant="primary" text="Default: 0"]|ノートに対する返信の数|
|reactions|[!badge variant="info" text="Dict[str, Any]"]|投稿に付いたリアクションのリスト|
|emojis|[!badge variant="info" text="Any"]|投稿に含まれる絵文字のリスト [!badge variant="danger" text="要修正"]|
|file_ids|[!badge variant="info" text="Optional[List[str]]"] [!badge variant="primary" text="Default: None"]|添付されたファイルのIDリスト|
|files|[!badge variant="info" text="List[RawFile]"] [!badge variant="primary" text="Default: \[\]"]|添付されたファイルの生オブジェクトリスト|
|reply_id|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|リプライのID|
|renote_id|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|リノートのID|
|uri|[!badge variant="info" text="Optional[str]"]|投稿のURI|
|poll|[!badge variant="info" text="Optional[RawPoll]"]|アンケートの生オブジェクト|

### RawReaction

**import** `from mipac.core.models import RawReaction`

|name|type|description|
|---|---|---|
|id|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|リアクションを付けた際のイベントID|
|created_at|[!badge variant="info" text="Optional[datetime]"]|リアクションを付与した日時|
|type|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|[!badge variant="warning" text="TODO"]|
|is_read|[!badge variant="info" text="bool"] [!badge variant="primary" text="Default: False"]|読まれたか|
|user|[!badge variant="info" text="Optional[RawUser]"](#rawuser)|ユーザーオブジェクト|
|note|[!badge variant="info" text="Optional[RawNote]"](#rawnote)|ノートオブジェクト|
|reaction|[!badge variant="info" text="str"]|リアクション|

### RawNoteReaction

**import** `from mipac.core.models import RawNoteReaction`

|name|type|description|
|---|---|---|
|id|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|リアクションを付けた際のイベントID|
|created_at|[!badge variant="info" text="Optional[datetime]"]|リアクションを付与した日時|
|user|[!badge variant="info" text="UserPayload"]|リアクションを付けたユーザー|
|reaction|[!badge variant="info" text="str"]|リアクション|

### RawNote

**import** `from mipac.core.models import RawNote`

|name|type|description|
|---|---|---|
|id|[!badge variant="info" text="str"]|ノートのID|
|created_at|[!badge variant="info" text="datetime"]|ノートの作成日時|
|user_id|[!badge variant="info" text="str"]|投稿したユーザーのID|
|author|[!badge variant="info" text="RawUser"](#rawuser)|投稿したユーザーのオブジェクト|
|content|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|投稿したノートの内容|
|cw|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|閲覧注意時の文字|
|renote|[!badge variant="info" text="Optional[Renote]"] [!badge variant="primary" text="Default: None"]|リノートしたオブジェクト|
|visibility|[!badge variant="info" text="str"] [!badge variant="primary" text="Default: None"]|ノートの公開範囲|
|renote_count|[!badge variant="info" text="Optional[int]"] [!badge variant="primary" text="Default: None"]|リノートされた数|
|replies_count|[!badge variant="info" text="Optional[int]"] [!badge variant="primary" text="Default: None"]|ノートに対する返信の数|
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


