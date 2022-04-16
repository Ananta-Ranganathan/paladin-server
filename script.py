import sys
import json

print(str(sys.argv))

f = open("./tickers.json")
data = json.load(f)

for i in data:
    print(data[i])

f.close()