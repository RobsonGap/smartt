import { Component } from '@angular/core';

import { HomePage } from '../home/home.page';
import { FeedPage } from '../feed/feed.page';
import { ContactPage } from '../contact/contact.page';
import { AboutPage } from '../about/about.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = FeedPage;



}
