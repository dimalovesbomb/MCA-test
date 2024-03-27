export interface LocalStorageMeta {
  meta: { loadedTimestamp: number; podcastId?: string };
}

export interface OverviewDataRes {
  feed: Feed;
}

export type CachedOverviewData = OverviewDataRes & LocalStorageMeta;

export interface Feed {
  author: Author;
  entry: Entry[];
  updated: Capture;
  rights: Capture;
  title: Capture;
  icon: Capture;
  link: Link[];
  id: Id;
}

export interface Author {
  name: Name;
  uri: Uri;
}

export interface Name {
  label: string;
}

export interface Uri {
  label: string;
}

export interface Entry {
  'im:name': Capture;
  'im:image': ImImage[];
  summary: Capture;
  'im:price': ImPrice;
  'im:contentType': ImContentType;
  rights?: Capture;
  title: Capture;
  link: Link;
  id: Id;
  'im:artist': ImArtist;
  category: Category;
  'im:releaseDate': ImReleaseDate;
}

export interface ImImage {
  label: string;
  attributes: Attributes;
}

export interface Attributes {
  height: string;
}

export interface ImPrice {
  label: string;
  attributes: ImPriceAttributes;
}

export interface ImPriceAttributes {
  amount: string;
  currency: string;
}

export interface ImContentType {
  attributes: ImContentTypeAttributes;
}

export interface ImContentTypeAttributes {
  term: string;
  label: string;
}

export interface Link {
  attributes: LinkAttributes;
}

export interface LinkAttributes {
  rel: string;
  type?: string;
  href: string;
}

export interface Id {
  label: string;
  attributes?: IdAttributes;
}

export interface IdAttributes {
  'im:id': string;
}

export interface ImArtist {
  label: string;
  attributes?: ImArtistAttributes;
}

export interface ImArtistAttributes {
  href: string;
}

export interface Category {
  attributes: CategoryAttributes;
}

export interface CategoryAttributes {
  'im:id': string;
  term: string;
  scheme: string;
  label: string;
}

export interface ImReleaseDate {
  label: string;
  attributes: Capture;
}

export interface Capture {
  label: string;
}

/////////////////////

export interface DetailsContents {
  resultCount: number;
  results: DetailsResult[];
}

export interface DetailsResult {
  wrapperType: string;
  kind: string;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  artworkUrl600: string;
  genreIds: string[];
  genres: string[];
}

///////////

export interface RSSResponse {
  title: string;
  description: string;
  link: string;
  image: string;
  category: any[];
  items: Item[];
}

export interface Item {
  id?: string;
  title: string;
  description: string;
  link: string;
  published: number;
  created: number;
  category: any;
  content: string;
  enclosures: [Enclosures, Enclosure[]];
  content_encoded: string;
  itunes_summary?: string;
  itunes_author: string;
  itunes_duration: number;
  itunes_episodeType: string;
  itunes_image: ItunesImage;
  media: Media;
  itunes_explicit?: string;
}

export interface Enclosures {
  url: string;
  length: string;
  type: string;
}

export interface Enclosure {
  'media:player'?: MediaPlayer;
  url: string;
  type: string;
}

export interface MediaPlayer {
  url: string;
}

export interface ItunesImage {
  href: string;
}

export interface Media {
  thumbnail: Thumbnail[];
}

export interface Thumbnail {
  'media:player'?: MediaPlayer;
  url: string;
  type: string;
}

export type CachedRSSResponse = RSSResponse & LocalStorageMeta;
