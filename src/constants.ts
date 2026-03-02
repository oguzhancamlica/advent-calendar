export interface Reason {
  id: number;
  date: Date;
  title: string;
  content: string;
}

export const REASONS: Reason[] = [
  {
    id: 1,
    date: new Date('2026-03-02T00:00:00'),
    title: "Yanımdayken İçim Sakinleşiyor",
    content: "Hayat bazen karmaşık, bazen yorucu. Ama sen yanımdayken içimde garip bir huzur oluyor. Belki de seni en çok bu yüzden seviyorum… Yanımdayken dünya biraz daha kolay."
  },
  {
    id: 2,
    date: new Date('2026-03-04T00:00:00'),
    title: "Gülüşün",
    content: "Bazı insanlar gülünce ortam aydınlanır derler ya… Abartı sanırdım. Sonra sen güldün. Ve gerçekten anladım. En yorgun günümde bile yüzümü gülümseten tek şey sensin."
  },
  {
    id: 3,
    date: new Date('2026-03-05T00:00:00'),
    title: "Hayatımın İçine Çok Güzel Karıştın",
    content: "Plansız geldin belki hayatıma. Ama şimdi baktığımda, ‘İyi ki’ dediğim en net şey sensin. Alışkanlık değil, mecburiyet değil… Bilerek, isteyerek seviyorum seni."
  },
  {
    id: 4,
    date: new Date('2026-03-06T00:00:00'),
    title: "En İyi Arkadaşım Olman",
    content: "Sen sadece sevdiğim kadın değilsin. Aynı zamanda en rahat konuşabildiğim, saçmalayabildiğim, sustuğumda bile anlaşabildiğim kişisin. Biz hem aşkı hem dostluğu başardık."
  },
  {
    id: 5,
    date: new Date('2026-03-07T00:00:00'),
    title: "Gelecek Hayalimde Sen Varsın",
    content: "Bazen hayal kurarken fark ediyorum. Ev, yolculuk, kahvaltı, tatil… Hepsinde sen varsın. Geleceği planlarken yanında olduğumu düşünmek bile içimi ısıtıyor.\n\nYarın son sebep… Ve küçük bir sürpriz var."
  },
  {
    id: 6,
    date: new Date('2026-03-09T00:00:00'),
    title: "Sensiz Bir Senaryo Düşünemiyorum",
    content: "Bu 6 gün boyunca sana seni neden sevdiğimi anlattım. Ama gerçek şu ki, sebeplerden bağımsız seviyorum seni. Çünkü sen varsın. Ve hayatımda olman bana yetiyor."
  }
];
