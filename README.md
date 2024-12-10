# コースパワー、キューポート自動ログイン拡張機能
# KALI (Kute Auto LogIn)

## 概要
この Chrome 拡張機能は、[CoursePower](https://study.ns.kogakuin.ac.jp) および [ku-port](https://ku-port.sc.kogakuin.ac.jp)  でログインボタンを2回押す手間を省きます。

## 導入方法

1. [拡張機能のダウンロードリンク](https://github.com/SAYUTIM/KALI/raw/refs/heads/main/KALI_ver2.1.1.zip)から ZIP ファイルをダウンロードします。

2. ダウンロードした ZIP ファイルを任意の場所へ解凍します。

3. [Chrome の拡張機能ページ](chrome://extensions/)にアクセスし、右上の「デベロッパーモード」を有効にします。

4. 「パッケージ化されていない拡張機能を読み込む」をクリックし、先ほど解凍したフォルダー内にある `AutoLogin`フォルダー を選択します。

5. 拡張機能「AutoLogin」が表示されたら、導入終了です。

## 設定方法

1. [Chrome の拡張機能ページ](chrome://extensions/)にて拡張機能「AutoLogin」の"詳細"をクリックします。

2. 拡張機能を有効化します。( OFF → ON )

3. 下にスクロールして、"拡張機能のオプション"をクリックしAutoLoginの設定画面に遷移します。

4. ユーザー名、パスワードを入力し、スイッチをONにして機能を有効化します。(緑色になれば有効化中)

5. 「設定が保存されました。」と表示されれば成功です。

## 機能

### ・ログイン
[CoursePower](https://study.ns.kogakuin.ac.jp) もしくは [ku-port](https://ku-port.sc.kogakuin.ac.jp) を開くと自動でログインされます。
使用する場合はユーザー名とパスワードを入力してください。

### ・現在時刻
[CoursePower](https://study.ns.kogakuin.ac.jp) で右上に現在時刻と、授業開始もしくは終了までの時間が表示されます。

### ・出席 (ベータ機能、情報学部の論理回路のみ対応)
水曜日の寝る前もしくは木曜日の授業が始まる前までに[CoursePower](https://study.ns.kogakuin.ac.jp)のてきとうなページを開き放置しているだけで10:09に出席ボタンを押し、meetに参加して11:35に勝手に退出します。
使用する場合はMeet機能もONにしてください。

### ・Meet
[Meet](https://meet.google.com/) を開くと自動でカメラとマイクをオフにして参加します。
