import scrapy
class TorrentItem(scrapy.Item):
	url = scrapy.Field()
	name = scrapy.Field()
	# description = scrapy.Field()
	# size = scrapy.Field()


from scrapy.contrib.spiders import CrawlSpider, Rule
from scrapy.contrib.linkextractors import LinkExtractor

class MininovaSpider(CrawlSpider):
	
	name = 'mininova'
	allowder_domins = ['mininova.org']
	start_urls = ['http://www.mininova.org/yesterday']
	rules = [Rule(LinkExtractor(allow=['/tor/\d+']), 'parse_torrent')]

	def parse_torrent(self, response):
		torrent = TorrentItem()
		torrent['url'] = response.url
		torrent['name'] = response.xpath("//div[@id='content']/h1[1]/text()").extract()
		# torrent['description'] = response.xpath("//div[@id='description']").extract()
		# torrent['size'] = response.xpath("//div[@id='specifications']/p[2]/text()[2]").extract()
		return torrent