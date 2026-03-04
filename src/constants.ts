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
    title: "İlk Gördüğüm Anda Bir Şey Oldu",
    content: "Seni ilk gördüğüm anı hatırlıyorum.\nİçimde tarif edemediğim bir his olmuştu.\nDünya durmuş gibi,\nSanki sadece sen ve ben varmışız gibi.\n\nO an anlamamış olabilirim,\nama şimdi biliyorum…\n\nO his boşuna değildi.\n\nİyi ki seni tanımışım.\nGerçekten, iyi ki."
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
    content: "Bazen hayal kurarken fark ediyorum. Ev, yolculuk, kahvaltı, tatil… Hepsinde sen varsın. Geleceği planlarken yanında olduğumu düşünmek bile içimi ısıtıyor."
  },
  {
    id: 6,
    date: new Date('2026-03-08T00:00:00'),
    title: "Her Şeyi Seninle Paylaşmak",
    content: "Günün en güzel anı da, en kötü anı da olsa ilk sana anlatmak istiyorum. Çünkü biliyorum ki beni en iyi sen anlarsın, en içten sen dinlersin. Hayat seninle paylaşınca güzel."
  },
  {
    id: 7,
    date: new Date('2026-03-09T00:00:00'),
    title: "Sadece Sen Olduğun İçin",
    content: "Bu 7 gün boyunca sana 'iyi ki varsın' dememdeki bazı nedenleri anlattım. Ama aslında en büyük sebep sensin. Varlığın, gülüşün ve hayatımda olman bana yetiyor.\n\nİyi ki varsın sevgilim. Her anımda, her hayalimde iyi ki varsın."
  }
];
