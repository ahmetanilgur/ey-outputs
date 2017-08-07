import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Search for any pentest output!';
  games = [
    {
      "id":"1",
      "gozlem": "SSL sertifika süresi dolmuştur",
      "risk": "Sunucunun şifrelemesi düşük seviyede ya da hiç yapılmamaktadır.",
      "baglantiNoktasi": "İç Ağ",
      "gozlemDetayi": "SSL sertifika kullanım süresi son kullanma tarihini geçmiştir",
      "iyilestirmeOnerisi": "SSL sertifikalarının güvenilen bir kaynaktan alınarak yenilenmesi önerilmektedir."
    },
    {
      "id":"1",
      "gozlem": "Internet üzerinden kolayca bulunabilen SWEET32 zafiyeti bulunmaktadır",
      "risk": "Sunucunun şifrelemesi düşük seviyede ya da hiç yapılmamaktadır.",
      "baglantiNoktasi": "İç Ağ",
      "gozlemDetayi": "SSL sertifika kullanım süresi son kullanma tarihini geçmiştir",
      "iyilestirmeOnerisi": "SSL sertifikalarının güvenilen bir kaynaktan alınarak yenilenmesi önerilmektedir."
    },
    {
      "id":"1",
      "gozlem": "SSL sertifika süresi dolmuştur",
      "risk": "Sunucunun şifrelemesi düşük seviyede ya da hiç yapılmamaktadır.",
      "baglantiNoktasi": "İç Ağ",
      "gozlemDetayi": "SSL sertifika kullanım süresi son kullanma tarihini geçmiştir",
      "iyilestirmeOnerisi": "SSL sertifikalarının güvenilen bir kaynaktan alınarak yenilenmesi önerilmektedir."
    },
    {
      "id":"1",
      "gozlem": "SSL sertifika süresi dolmuştur",
      "risk": "Sunucunun şifrelemesi düşük seviyede ya da hiç yapılmamaktadır.",
      "baglantiNoktasi": "İç Ağ",
      "gozlemDetayi": "SSL sertifika kullanım süresi son kullanma tarihini geçmiştir",
      "iyilestirmeOnerisi": "SSL sertifikalarının güvenilen bir kaynaktan alınarak yenilenmesi önerilmektedir."
    }
    
  ];

  //sorting
  key: string = 'name';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;
}
