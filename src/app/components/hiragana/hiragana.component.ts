import { AfterContentChecked, AfterContentInit, AfterViewInit, Component,OnInit, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
import { ArrayUtils } from '../functionality/utils';

@Component({
  selector: 'app-hiragana',
  templateUrl: './hiragana.component.html',
  styleUrls: ['./hiragana.component.scss']
})
export class HiraganaComponent implements OnInit, AfterViewInit, AfterContentChecked {
  ngAfterContentChecked(): void {

  }
  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    
  }
  hiraganaArray = [
    { hiragana: 'い', correctRomaji: 'i', romaji:'' ,id:'hiragana-i'},
    { hiragana: 'あ', correctRomaji: 'a', romaji:'' ,id:'hiragana-a'},
    { hiragana: 'う', correctRomaji: 'u', romaji:'' ,id:'hiragana-u'},
    { hiragana: 'え', correctRomaji: 'e', romaji:'' ,id:'hiragana-e'},
    { hiragana: 'お', correctRomaji: 'o', romaji:'' ,id:'hiragana-o'},
    { hiragana: 'か', correctRomaji: 'ka', romaji:'' ,id:'hiragana-ka'},
    { hiragana: 'き', correctRomaji: 'ki', romaji:'' ,id:'hiragana-ki'},
    { hiragana: 'く', correctRomaji: 'ku', romaji:'' ,id:'hiragana-ku'},
    { hiragana: 'け', correctRomaji: 'ke', romaji:'' ,id:'hiragana-ke'},
    { hiragana: 'こ', correctRomaji: 'ko', romaji:'' ,id:'hiragana-ko'},
    { hiragana: 'さ', correctRomaji: 'sa', romaji:'' ,id:'hiragana-sa'},
    { hiragana: 'し', correctRomaji: 'shi', romaji:'' ,id:'hiragana-shi'},
    { hiragana: 'せ', correctRomaji: 'se', romaji:'' ,id:'hiragana-se'},
    { hiragana: 'す', correctRomaji: 'su', romaji:'' ,id:'hiragana-su'},
    { hiragana: 'た', correctRomaji: 'ta', romaji:'' ,id:'hiragana-ta'},
    { hiragana: 'そ', correctRomaji: 'so', romaji:'' ,id:'hiragana-so'},
    { hiragana: 'つ', correctRomaji: 'tsu', romaji:'' ,id:'hiragana-tsu'},
    { hiragana: 'ち', correctRomaji: 'chi', romaji:'' ,id:'hiragana-chi'},
    { hiragana: 'と', correctRomaji: 'to', romaji:'' ,id:'hiragana-to'},
    { hiragana: 'て', correctRomaji: 'te', romaji:'' ,id:'hiragana-te'},
    { hiragana: 'に', correctRomaji: 'ni', romaji:'' ,id:'hiragana-ni'},
    { hiragana: 'な', correctRomaji: 'na', romaji:'' ,id:'hiragana-na'},
    { hiragana: 'ね', correctRomaji: 'ne', romaji:'' ,id:'hiragana-ne'},
    { hiragana: 'ぬ', correctRomaji: 'nu', romaji:'' ,id:'hiragana-nu'},
    { hiragana: 'は', correctRomaji: 'ha', romaji:'' ,id:'hiragana-ha'},
    { hiragana: 'の', correctRomaji: 'no', romaji:'' ,id:'hiragana-no'},
    { hiragana: 'ふ', correctRomaji: 'fu', romaji:'' ,id:'hiragana-fu'},
    { hiragana: 'ひ', correctRomaji: 'hi', romaji:'' ,id:'hiragana-hi'},
    { hiragana: 'ほ', correctRomaji: 'ho', romaji:'' ,id:'hiragana-ho'},
    { hiragana: 'へ', correctRomaji: 'he', romaji:'' ,id:'hiragana-he'},
    { hiragana: 'み', correctRomaji: 'mi', romaji:'' ,id:'hiragana-mi'},
    { hiragana: 'ま', correctRomaji: 'ma', romaji:'' ,id:'hiragana-ma'},
    { hiragana: 'め', correctRomaji: 'me', romaji:'' ,id:'hiragana-me'},
    { hiragana: 'む', correctRomaji: 'mu', romaji:'' ,id:'hiragana-mu'},
    { hiragana: 'や', correctRomaji: 'ya', romaji:'' ,id:'hiragana-ya'},
    { hiragana: 'も', correctRomaji: 'mo', romaji:'' ,id:'hiragana-mo'},
    { hiragana: 'よ', correctRomaji: 'yo', romaji:'' ,id:'hiragana-yo'},
    { hiragana: 'ゆ', correctRomaji: 'yu', romaji:'' ,id:'hiragana-yu'},
    { hiragana: 'り', correctRomaji: 'ri', romaji:'' ,id:'hiragana-ri'},
    { hiragana: 'ら', correctRomaji: 'ra', romaji:'' ,id:'hiragana-ra'},
    { hiragana: 'れ', correctRomaji: 're', romaji:'' ,id:'hiragana-re'},
    { hiragana: 'る', correctRomaji: 'ru', romaji:'' ,id:'hiragana-ru'},
    { hiragana: 'わ', correctRomaji: 'wa', romaji:'' ,id:'hiragana-wa'},
    { hiragana: 'ろ', correctRomaji: 'ro', romaji:'' ,id:'hiragana-ro'},
    { hiragana: 'ん', correctRomaji: 'n', romaji:'' ,id:'hiragana-n'},
    { hiragana: 'を', correctRomaji: 'wo', romaji:'' ,id:'hiragana-wo'},
  ];
  
  shuffledArray!: any[];
  time: number = 0;
  formattedTime : string = "";
  timer: any;
  started: boolean = false;
  timeLabel : string = "";  
  
  startGame() {
    this.timeLabel = "Time:";
    this.shuffledArray = ArrayUtils.shuffleArray(this.hiraganaArray);
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
    this.hiraganaArray.forEach(element => {
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