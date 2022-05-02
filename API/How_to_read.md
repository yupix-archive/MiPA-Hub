# このドキュメントの読み方

## バッヂの意味

|バッヂ|説明|
|---|---|
|[!badge variant="warning" text="v11 only"]|Misskey v11のインスタンスでのみに値が存在します|
|[!badge variant="warning" text="Ayuskey only"]|Ayuskey を使用したインスタンスのみに値が存在します|
|[!badge variant="warning" text="v11 or m544 only"]|Misskey v11/m544を使用したインスタンスのみに値が存在します|
|[!badge variant="warning" text="v12 only"]|Misskey v12を使用したインスタンスのみに値が存在します|
|[!badge variant="warning" text="v12 or Ayuskey only"]|Misskey v12またはAyuskeyを使用したインスタンスのみに値が存在します|
|[!badge variant="warning" text="Ayuskey or m544 only"]|Ayuksey または m544を使用したインスタンスのみに値が存在します|
|[!badge variant="warning" text="TODO"]|現在調査中、作成中の場合|
|[!badge variant="danger" text="要修正"]|MiPA/MiPAC側で現在値が正しく無く、正しい値を表示している場合|
|[!badge variant="danger" text="非推奨"]|Misskey API もしくは MiPA/MiPAC側で非推奨となっている場合|

### モデル関連のテーブルの見方

モデルに関するドキュメントには以下のようなテーブルがあると思います。

|name|type|description|
|---|---|---|
|||

例えばこれがUserモデルのテーブルだった場合は以下のようになります

#### User

|name|type|description|
|---|---|---|
|id|[!badge variant="info" text="Optional[str]"] [!badge variant="primary" text="Default: None"]|ユーザーのID|

### コリュームごとの意味

- name
    - そのクラスに存在する属性を指します。Userクラスのnameがidの場合は`user.id`とアクセスします
- type
    - その属性の型を表示します。Default:から始まるバッヂが存在する場合は値が存在しない場合その値が入っています
- description
    - その属性の説明やヒントが書いてあります

