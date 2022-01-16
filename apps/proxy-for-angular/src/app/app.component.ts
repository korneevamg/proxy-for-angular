import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  BitcoinMarketData,
  BitcoinMarketDataService,
} from './bitcoin-market-data.service';

@Component({
  selector: 'proxy-for-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public bitcoinData: Observable<BitcoinMarketData[]> =
    this.bitcoinMarketDataService.fetchBitcoinData();
  public constructor(
    private bitcoinMarketDataService: BitcoinMarketDataService
  ) {}
}
