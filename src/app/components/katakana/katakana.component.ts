import { Component } from '@angular/core';
import { ArrayUtils } from '../functionality/utils';

@Component({
  selector: 'app-katakana',
  templateUrl: './katakana.component.html',
  styleUrls: ['./katakana.component.scss']
})
export class KatakanaComponent {

  katakanaArray = [
    { katakana: 'イ', correctRomaji: 'i', romaji:'' ,id:'katakana-i'},
    { katakana: 'ア', correctRomaji: 'a', romaji:'' ,id:'katakana-a'},
    { katakana: 'ウ', correctRomaji: 'u', romaji:'' ,id:'katakana-u'},
    { katakana: 'エ', correctRomaji: 'e', romaji:'' ,id:'katakana-e'},
    { katakana: 'オ', correctRomaji: 'o', romaji:'' ,id:'katakana-o'},
    { katakana: 'カ', correctRomaji: 'ka', romaji:'' ,id:'katakana-ka'},
    { katakana: 'キ', correctRomaji: 'ki', romaji:'' ,id:'katakana-ki'},
    { katakana: 'ク', correctRomaji: 'ku', romaji:'' ,id:'katakana-ku'},
    { katakana: 'ケ', correctRomaji: 'ke', romaji:'' ,id:'katakana-ke'},
    { katakana: 'コ', correctRomaji: 'ko', romaji:'' ,id:'katakana-ko'},
    { katakana: 'サ', correctRomaji: 'sa', romaji:'' ,id:'katakana-sa'},
    { katakana: 'シ', correctRomaji: 'shi', romaji:'' ,id:'katakana-shi'},
    { katakana: 'セ', correctRomaji: 'se', romaji:'' ,id:'katakana-se'},
    { katakana: 'ス', correctRomaji: 'su', romaji:'' ,id:'katakana-su'},
    { katakana: 'タ', correctRomaji: 'ta', romaji:'' ,id:'katakana-ta'},
    { katakana: 'ソ', correctRomaji: 'so', romaji:'' ,id:'katakana-so'},
    { katakana: 'ツ', correctRomaji: 'tsu', romaji:'' ,id:'katakana-tsu'},
    { katakana: 'チ', correctRomaji: 'chi', romaji:'' ,id:'katakana-chi'},
    { katakana: 'ト', correctRomaji: 'to', romaji:'' ,id:'katakana-to'},
    { katakana: 'テ', correctRomaji: 'te', romaji:'' ,id:'katakana-te'},
    { katakana: 'ニ', correctRomaji: 'ni', romaji:'' ,id:'katakana-ni'},
    { katakana: 'ナ', correctRomaji: 'na', romaji:'' ,id:'katakana-na'},
    { katakana: 'ネ', correctRomaji: 'ne', romaji:'' ,id:'katakana-ne'},
    { katakana: 'ヌ', correctRomaji: 'nu', romaji:'' ,id:'katakana-nu'},
    { katakana: 'ハ', correctRomaji: 'ha', romaji:'' ,id:'katakana-ha'},
    { katakana: 'ノ', correctRomaji: 'no', romaji:'' ,id:'katakana-no'},
    { katakana: 'フ', correctRomaji: 'fu', romaji:'' ,id:'katakana-fu'},
    { katakana: 'ヒ', correctRomaji: 'hi', romaji:'' ,id:'katakana-hi'},
    { katakana: 'ホ', correctRomaji: 'ho', romaji:'' ,id:'katakana-ho'},
    { katakana: 'ヘ', correctRomaji: 'he', romaji:'' ,id:'katakana-he'},
    { katakana: 'ミ', correctRomaji: 'mi', romaji:'' ,id:'katakana-mi'},
    { katakana: 'マ', correctRomaji: 'ma', romaji:'' ,id:'katakana-ma'},
    { katakana: 'メ', correctRomaji: 'me', romaji:'' ,id:'katakana-me'},
    { katakana: 'ム', correctRomaji: 'mu', romaji:'' ,id:'katakana-mu'},
    { katakana: 'ヤ', correctRomaji: 'ya', romaji:'' ,id:'katakana-ya'},
    { katakana: 'ユ', correctRomaji: 'yu', romaji:'' ,id:'katakana-yu'},
    { katakana: 'ヨ', correctRomaji: 'yo', romaji:'' ,id:'katakana-yo'}
  ]


  shuffledArray!: any[];
  time: number = 0;
  formattedTime : string = "";
  timer: any;
  started: boolean = false;
  timeLabel : string = "";  
  
  startGame() {
    this.timeLabel = "Time:";
    this.shuffledArray = ArrayUtils.shuffleArray(this.katakanaArray);
    this.shuffledArray.forEach((hiragana, index) => {
      hiragana.id = `hiragana-${index}`;
    });
    this.time = 0;
    this.started = true;

    setTimeout(() => {
      const startingInput = document.getElementById('hiragana-0') as HTMLInputElement;
      startingInput.focus()  
    }, 0);

    this.timer = setInterval(() => {
      this.time++;
      if (this.isGameFinished()) {
        this.timeLabel = "Completed on : "
        this.stopGame();
      }
      const minutes = Math.floor(this.time / 60).toString().padStart(2, '0');
      const seconds = (this.time % 60).toString().padStart(2, '0');
      this.formattedTime = `${minutes}:${seconds}`;
    }, 1000);

  }
  
  stopGame() {
    this.started = false;
    this.katakanaArray.forEach(element => {
      element.romaji = ""
    });
    clearInterval(this.timer);
    this.shuffledArray = [];
  }

  onInputChanged(event: any, hiragana: any) {
    console.log('event ',event)
    if (event === hiragana.correctRomaji) {
      hiragana.romaji = event;
      hiragana.correctRomaji = event;
    }
  }

  isCorrect(event: any, hiragana: any) {
    console.log(hiragana.romaji === hiragana.correctRomaji)
    if (hiragana.romaji.toLocaleLowerCase() === hiragana.correctRomaji) {
      const currentInput = document.getElementById(hiragana.id) as HTMLInputElement;
      console.log('current input -> ',currentInput)
      console.log('this.shuffledArray.indexOf(hiragana)',this.shuffledArray.indexOf(hiragana)+1)
      const nextInput = document.getElementById(`hiragana-${this.shuffledArray.indexOf(hiragana) + 1}`) as HTMLInputElement;
      console.log('next input -> ',nextInput)
      if (nextInput) {
        nextInput.focus();
      } else {
        currentInput.blur();
      }
    }
    
  }

  isGameFinished() {
    const finished = this.shuffledArray.every((hiragana) => hiragana.romaji === hiragana.correctRomaji);
    if (finished) {
      this.started = false;
      this.stopGame()
    }
    return finished;
  }



}
