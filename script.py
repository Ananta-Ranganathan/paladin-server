import json
import requests
import sec_edgar_downloader
print(sec_edgar_downloader.__version__)
from sec_edgar_downloader import Downloader

f = open("./tickers.json")
data = json.load(f)

cik_strs = []

for i in data:
    cik_strs.append(str(data[i]["cik_str"]))

dl = Downloader()

dl.get("8-K", "AAPL")

# for i in cik_strs:
# url = r'https://data.sec.gov/submissions/CIK0000{}.json'.format(cik_strs[0])
# headers = {"User-Agent": "2607:f010:2e9:11:f1fb:e7d9:2247:f721"}
# response = requests.get(url, headers)
# print(url)
# print(response)
    # print(i)
# URL_text = r'https://www.sec.gov/Archives/edgar/data/1318605/000156459020004475/0001564590-20-004475.txt'
# response = requests.get(URL_text, headers)
# print(response)
# print(str(cik_strs))
 
f.close()