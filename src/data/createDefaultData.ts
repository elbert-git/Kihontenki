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


const hiraganaCSV=`あ,a
い,i
う,u
え,e
お,o
か,ka
き,ki
く,ku
け,ke
こ,ko
さ,sa
し,shi
す,su
せ,se
そ,so
た,ta
ち,chi
つ,tsu
て,te
と,to
な,na
に,ni
ぬ,nu
ね,ne
の,no
は,ha
ひ,hi
ふ,hu
へ,he
ほ,ho
ま,ma
み,mi
む,mu
め,me
も,mo
や,ya
ゆ,yu
よ,yo
ら,ra
り,ri
る,ru
れ,re
ろ,ro
わ,wa
を,wo
ん,n
きゃ,kya
きゅ,kyu
きょ,kyo
しゃ,sha
しゅ,shu
しょ,sho
ちゃ,cha
ちゅ,chu
ちょ,cho
にゃ,nya
にゅ,nyu
にょ,nyo
ひゃ,hya
ひゅ,hyu
ひょ,hyo
みゃ,mya
みゅ,myu
みょ,myo
りゃ,rya
りゅ,ryu
りゅ,ryo
が,ga
ぎ,gi
ぐ,gu
げ,ge
ご,go
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
ば,ba
び,bi
ぶ,bu
べ,be
ぼ,bo
ぱ,pa
ぴ,pi
ぷ,pu
ぺ,pe
ぽ,po
ぎゃ,gya
ぎゅ,gyu
ぎょ,gyo
じゃ,ja
じゅ,ju
じょ,jo
ぢゃ,ja
ぢゅ,ju
ぢょ,jo
びゃ,ja
びゅ,ju
びょ,jo
ぴゃ,pya
ぴゅ,pyu
ぴょ,pyo`

const kataCSV=`
ア,a
イ,i
ウ,u
エ,e
オ,o
カ,ka
キ,ki
ク,ku
ケ,ke
コ,ko
サ,sa
シ,shi
ス,su
セ,se
ソ,so
タ,ta
チ,chi
ツ,tsu
テ,te
ト,to
ナ,na
ニ,ni
ヌ,nu
ネ,ne
ノ,no
ハ,ha
ヒ,hi
フ,hu
ヘ,he
ホ,ho
マ,ma
ミ,mi
ム,mu
メ,me
モ,mo
ヤ,ya
ユ,yu
ヨ,yo
ラ,ra
リ,ri
ル,ru
レ,re
ロ,ro
ワ,wa
ヲ,wo
ン,n
ガ,ga
ギ,gi
グ,gu
ゲ,ge
ゴ,go
ザ,za
ジ,ji
ズ,zu
ゼ,ze
ゾ,zo
ダ,da
ヂ,ji
ヅ,dzu
デ,de
ド,do
バ,ba
ビ,bi
ブ,bu
ベ,be
ボ,bo
パ,pa
ピ,pi
プ,pu
ペ,pe
ポ,po
キャ,kya
キュ,kyu
キョ,kyo
シャ,sha
シュ,shu
ショ,sho
チャ,cha
チュ,chu
チョ,cho
ニャ,nya
ニュ,nyu
ニョ,nyo
ヒャ,hya
ヒュ,hyu
ヒョ,hyo
ミャ,mya
ミュ,myu
ミョ,myo
リャ,rya
リュ,ryu
リョ,ryo
ギャ,gya
ギュ,gyu
ギョ,gyo
ジャ,ja
ジュ,ju
ジョ,jo
デヤ,dya
デユ,dyu
デョ,dyo
ビャ,bya
ビュ,byu
ビョ,byo
ピャ,pya
ピュ,pyu
ピョ,pyo
ヴ,v`

export default function createDefaultData(){
  //create array of cards 
  const hiraganaDeck:Deck = {
    name:'Hiragana',
    key:generateRandomString(20),
    cards: hiraganaCSV.split(/\r?\n/).map((line)=>{
      const pair = line.split(',')
      const card:Card = {
        front:pair[0],
        back:pair[1],
        frontSize:3,
        backSize:2,
        score:0,
        // score:Math.floor(Math.random()*100),
        key:generateRandomString(50) as string
      }
      return card
    })
  }
  const katakanaDeck:Deck = {
    name:'Katakana',
    key:generateRandomString(20),
    cards: kataCSV.split(/\r?\n/).map((line)=>{
      const pair = line.split(',')
      const card:Card = {
        front:pair[0],
        back:pair[1],
        frontSize:3,
        backSize:2,
        score:0,
        // score:Math.floor(Math.random()*100),
        key:generateRandomString(50) as string
      }
      return card
    })
  }
  
  const UserDecks:UserDecks = {
    decks:[hiraganaDeck, katakanaDeck],
    cachedActive:{}
  }

  // modify active cache to make first 5 hiragana cards active
  const ids = UserDecks.decks[0].cards.map(card=>card.key)
  for (let index = 0; index < 5; index++) {
    const id = ids[index];
    UserDecks.cachedActive![id] = true
  }

  return UserDecks
}
