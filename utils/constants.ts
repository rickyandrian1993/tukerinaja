import { BenefitTypes } from "@/types/benefit";
import { LocationTypes } from "@/types/location";
import { NavTypes } from "@/types/nav";
import { TestimonialTypes } from "@/types/testimonial";

export const navItems: NavTypes[] = [
  { id: 'home', label: 'Home' },
  { id: 'tanya', label: 'Tanya' },
  { id: 'location', label: 'Lokasi' },
  { id: 'testimonial', label: 'Testimonial' }
]

export const benefitItems: BenefitTypes[] = [
  {
    id: 1,
    title: 'Proses Cepat 5 Menit Cair',
    image: '/images/benefit-1.png'
  },
  {
    id: 2,
    title: 'Estimasi Cepat Lewat Whatsapp AI',
    image: '/images/benefit-2.png'
  },
  {
    id: 3,
    title: 'Harga Tinggi Di Pasaran',
    image: '/images/benefit-3.png'
  },
  {
    id: 4,
    title: 'Terima Segala Kondisi',
    image: '/images/benefit-4.png'
  },
  {
    id: 5,
    title: 'Bisa Transaksi Via Online',
    image: '/images/benefit-5.png'
  },
  {
    id: 6,
    title: '100% Aman Bergaransi',
    image: '/images/benefit-6.png'
  },
]

export const locationItems: LocationTypes[] = [
  {
    city: 'Jakarta',
    branches: [
      {
        name: 'Central Park',
        address:
          'Ruko Garden Shopping Arcade, B/08/BC, Letjen S. Parman No.Kav. 9, RT.12/RW.6, Kec. Grogol petamburan, Jakarta Barat 11470',
        phone: '0812-9345-0102',
      },
      {
        name: 'Kelapa Gading',
        address:
          'Jl. Boulevard Raya No.28 Blok LB1, RT.12/RW.18, Klp. Gading Tim., Kec. Klp. Gading, Jakarta Utara 14240',
        phone: '0852-1012-7412',
      },
      {
        name: 'Kemang',
        address:
          'Jl. Kemang Raya No.690, RT.7/RW.2, Bangka, Kec. Mampang Prpt., Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12730',
        phone: '0853-1521-3061',
      },
      {
        name: 'PIK',
        address:
          'Ruko crown golf blok A no 31, Jl. Pantai Indah Kapuk No.2, Kamal Muara, Jakarta Utara 14460',
        phone: '0858-9229-1711',
      },
    ],
  },
  { city: 'Bekasi' },
  { city: 'Tangerang' },
  { city: 'Bogor' },
  { city: 'Bandung' },
  { city: 'Surabaya' },
  { city: 'Malang' },
  { city: 'Semarang' },
  { city: 'Yogyakarta' },
  { city: 'Balikpapan' },
  { city: 'Medan' },
]

export const testimonialItems: TestimonialTypes[] = [
  {
    name: "Budi Budiman",
    text: "Prosesnya Cepet Banget, pelayanannya juga ramah banget",
    rating: 5,
  },
  {
    name: "Santi",
    text: "Oke banget sih. Gak nyesel pokoknya jual ipad lama disini. prosesnya cepet. harga juga pas, ga kemurahan. pas banget pokoknya. pas lagi BU juga sih. hehehe..",
    rating: 5,
  },
  {
    name: "Joko",
    text: "Mantab banget pokoknya",
    rating: 5,
  },
  {
    name: "Rina",
    text: "Super cepat, adminnya juga sabar banget jawab pertanyaan.",
    rating: 5,
  },
  {
    name: "Dedi",
    text: "Harga pas, pelayanan mantap, pasti balik lagi.",
    rating: 5,
  },
]