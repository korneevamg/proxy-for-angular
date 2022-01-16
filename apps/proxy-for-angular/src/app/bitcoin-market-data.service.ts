import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BitcoinMarketDataService {
  public constructor(private http: HttpClient) {}
  public fetchBitcoinData() {
    return this.http.get<BitcoinMarketData[]>('/v1/markets.json');
  }
}

// Documentation: https://bitcoincharts.com/about/markets-api/
export interface BitcoinMarketData {
  symbol: string; // short name for market
  currency: string; //base currency of the market (USD, EUR, RUB, JPY, ...)
  bid: string; //highest bid price
  ask: string; //lowest ask price
  latest_trade: string; //unixtime of latest trade. Following fields relate to the day of this field (UTC)!
  n_trades: string; //number of trades
  high: string; //highest trade during day
  low: string; //lowest trade during day
  close: string; //latest trade
  previous_close: string; //latest trade of previous day
  volume: string; //total trade volume of day in BTC
  currency_volume: string; //total trade volume of day in currency
}
