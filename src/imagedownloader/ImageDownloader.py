from bing_image_downloader import downloader
import sys

while True:
        f = open("keyword.txt" , "r")
        keyword = f.read()


        if keyword != "empty":

                downloader.download(keyword, limit=1,  output_dir='dataset', 
                        adult_filter_off=True, force_replace=False, timeout=60)
                with open("completed.txt", "w") as f:
                        f.write('completed')
                with open("keyword.txt", "w") as f:
                        f.write('empty')

        f.close()
        
