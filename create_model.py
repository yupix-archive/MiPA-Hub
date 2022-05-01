

def main():
    while True:
        text = ''
        print('名前')
        name = input('>>>')
        text += f'|{name}|'
        print('型')
        _type = input('>>>')
        text += f'[!badge variant="info" text="{_type}"]'
        print('デフォルト値')
        default = input('>>>')
        if len(default):
            text += f' [!badge variant="primary" text="Default: {default}"]|'
        else:
            text += '|'
        
            
        print('説明')
        description = input('>>>')
        text += f'{description}|'
        print(text)

if __name__ == '__main__':
    main()