# QuickStart

## MiPA/MiPACを使用したBotの作り方

```py main.py
import asyncio

from mipa.ext import commands
from mipa.router import Router
from mipac.models import Note

class MyBot(commands.Bot):
    def __init__(self):
        super().__init__()

    async def on_ready(self, ws):
        await Router(ws).connect_channel(["global", "main"])

    async def on_message(self, note: Note):
        print(note.author.nickname, note.content)

if __name__ == '__main__':
    bot = MyBot()
    asyncio.run(bot.start(url, token))
```

このコードを簡潔に紹介しますと、以下のようになります

1. MyBotクラスをインスタンス化し、bot変数に入れる
2. bot.start時にインスタンスのurl（wss://example.comやhttps://example.com）とBotにしたいユーザーのTokenを入れる
3. 起動すると`on_ready` イベントが呼ばれる為、その際にRouterクラスを用いて受け取りたい情報をBotに伝える
4. 3の手順で接続したチャンネル（今回ならグローバルタイムラインと自信に関する通知）に投稿があった場合、`on_message` イベントが呼ばれる

## MiPACを用いたAPI通信の例

```py main.py
import asyncio

from mipac.client import Client

async def main():
    client = Client(url, token)
    await client.http.login()
    note = await client.api.note.action.send('Hello World')
    print(note.author.nickname, note.content)

if __name__ == '__main__':
    asyncio.run(main())
