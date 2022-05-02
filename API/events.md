# MiPAのイベントリスト

このページではMiPAのイベントリスト( `on_ready`や `on_message`)を紹介します

|イベント名|タイミング|説明|
|---|---|---|
|on_ready|Botの起動が完了した際|Botが起動した際に発動し、第1引数にwebsocketのセッションを受け取ります|
|on_message|接続しているチャンネルで投稿があった際|接続しているチャンネルで投稿があった場合に発動し、第1引数に[!badge variant="light" text="Note"](/api/models/#note)を受け取ります|
|on_mention|Botとして使用しているアカウントにメンションがあった際|Botとして使用しているアカウントにメンションがあった際に発動し、第1引数に[!badge variant="light" text="Note"](/api/models/#note)を受け取ります|
|on_emoji_add|インスタンスに絵文字が追加された際|インスタンスに絵文字が追加された際に発動します。第1引数に[!badge variant="light" text="Emoji"]を受け取ります|
|on_follow_request|Botとして使用しているアカウントにフォローリクエストが来た際|Botとして使用しているアカウントにフォローリクエストが来た際に発動し、第1引数に[!badge variant="light" text="FollowRequest"]を受け取ります|
|on_me_updated|Botとして使用しているアカウントのプロフィールが更新された際|Botとして使用しているアカウントのプロフィールが更新された際に発動し、第1引数に[!badge variant="light" text="User"](/api/models/#user)を受け取りますを受け取ります|
|on_user_follow|ユーザーをフォローした際|ユーザーをフォローした際に発火し、第1引数に[!badge variant="light" text="User"](/api/models/#user)|
|on_follow|Botとして使用しているアカウントに新規フォロワーが来た際|Botとして使用しているアカウントに新規フォロワーが来た際に発火し、第1引数に[!badge variant="light" text="User"](/api/models/#user)を受け取ります|
|on_drive_file_created|ドライブにファイルを上げ終わった際|ドライブにファイルを上げ終わった際に発火し、第1引数に[!badge variant="light" text="Dict[str, Any]"]を受け取ります|
|on_reaction|Botとして使用しているアカウントのノートにリアクションが付いた際|Botとして使用しているアカウントのノートにリアクションが付いた際に発火し、第1引数に[!badge variant="light" text="Reaction"]を受け取ります|