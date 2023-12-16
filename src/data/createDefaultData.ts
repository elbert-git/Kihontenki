import { UserDecks, Deck, Card } from "./interfaces"

function generateRandomString(length: number){
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString:string = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomString += charset.charAt(randomIndex);
  }
  return randomString;
}


const hiraganaCSV=`な,na
に,ni
ぬ,nu
ね,ne
の,no
た,ta
ち,chi
つ,tsu
て,te
と,to
さ,sa
し,shi
す,su
せ,se
そ,so
か,ka
き,ki
く,ku
け,ke
こ,ko
ら,ra
り,ri
る,ru
れ,re
ろ,ro
ま,ma
み,mi
む,mu
め,me
も,mo
は,ha
ひ,hi
ふ,hu
へ,he
ほ,ho
あ,a
い,i
う,u
え,e
お,o
ん,n
わ,wa
を,wo
や,ya
ゆ,yu
よ,yo
にゃ,nya
にゅ,nyu
にょ,nyo
ちゃ,cha
broken1,chu
ちょ,cho
しゃ,sha
しゅ,shu
しょ,sho
きゃ,kya
きゅ,kyu
きょ,kyo
ぎゃ,gya
ぎゅ,gyu
ぎょ,gyo
りゃ,rya
broken2,ryu
りょ,ryo
みゃ,mya
みゅ,myu
みょ,myo
ひゃ,hya
ひゅ,hyu
ひょ,hyo
ぱ,pa
ぴ,pi
ぷ,pu
ぺ,pe
ぽ,po
ば,ba
び,bi
ぶ,bu
べ,be
ぼ,bo
だ,da
ぢ,ji/dji
づ,zu/dzu
で,de
ど,do
ざ,za
じ,ji
ず,zu
ぜ,ze
ぞ,zo
が,ga
ぎ,gi
ぐ,gu
げ,ge
ご,go`

const kataCSV=`ナ,na
ニ,ni
ヌ,nu
ネ,ne
ノ,no
タ,ta
チ,chi
ツ,tsu
テ,te
ト,to
サ,sa
シ,shi
ス,su
セ,se
ソ,so
カ,ka
キ,ki
ク,ku
ケ,ke
コ,ko
ア,a
イ,i
ウ,u
エ,e
オ,o
ワ,wa
ヲ,wo
ラ,ra
リ,ri
ル,ru
レ,re
ロ,ro
ヤ,ya
ユ,yu
ヨ,yo
マ,ma
ミ,mi
ム,mu
メ,me
モ,mo
ハ,ha
ヒ,hi
フ,hu
ヘ,he
ホ,ho
ン,n
ニャ,nya
ニュ,nyu
ニョ,nyo
チャ,cha
チュ,chu
チョ,cho
シャ,sha
シュ,shu
ショ,sho
キャ,kya
キュ,kyu
キョ,kyo
ギャ,gya
ギュ,gyu
グョ,gyo
リャ,rya
リュ,ryu
リョ,ryo
ミャ,mya
ミュ,myu
ミョ,myo
ヒャ,hya
ヒュ,hyu
ヒョ,hyo
ピャ,pya
ピュ,pyu
ピョ,pyo
ビャ,bya
ビュ,byu
ビョ,byo
デヤ,dya
デユ,dyu
デョ,dyo
ジャ,ja
ジュ,ju
ジョ,jo
パ,pa
ピ,pi
プ,pu
ペ,pe
ポ,po
バ,ba
ビ,bi
ブ,bu
ベ,be
ボ,bo
ダ,da
ヂ,ji
ヅ,dzu
デ,de
ド,do
ザ,za
ジ,ji
ズ,zu
ゼ,ze
ゾ,zo
ガ,ga
ギ,gi
グ,gu
ゲ,ge
ゴ,go
ファ,fa
フィ,fi
フォ,fo
フェ,fe
ヴ,v`

export default function createDefaultData(){
  //create array of cards 
  const hiraganaDeck:Deck = {
    name:'Hiragana',
    cards: hiraganaCSV.split(/\r?\n/).map((line)=>{
      const pair = line.split(',')
      const card:Card = {
        front:pair[0],
        back:pair[1],
        frontSize:3,
        backSize:2,
        score:0,
        key:generateRandomString(50) as string
      }
      return card
    })
  }
  const katakanaDeck:Deck = {
    name:'Katakana',
    cards: kataCSV.split(/\r?\n/).map((line)=>{
      const pair = line.split(',')
      const card:Card = {
        front:pair[0],
        back:pair[1],
        frontSize:3,
        backSize:2,
        score:0,
        key:generateRandomString(50) as string
      }
      return card
    })
  }
  
  const UserDecks:UserDecks = {
    decks:[hiraganaDeck, katakanaDeck]
  }

  return UserDecks
}