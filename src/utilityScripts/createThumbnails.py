from ctypes import resize
import os, sys
from PIL import Image

def resize_all_ims(infiles, dims=(1280, 720)):
    for infile in infiles:
        outfile = os.path.split(infile)[0] + r"\thumbnail_" + os.path.splitext(os.path.basename(infile))[0] + ".jpeg"
        if infile != outfile:
            try:
                im = Image.open(infile)
                im.thumbnail(dims)
                im_rgb = im.convert('RGB')
                im_rgb.save(outfile, "JPEG")
                print("saved to", outfile)
            except IOError:
                print("cannot create thumbnail for '%s'" % infile)


'''
    For the given path, get the List of all files in the directory tree 
'''
def getListOfFiles(dirName):
    # create a list of file and sub directories 
    # names in the given directory 
    listOfFile = os.listdir(dirName)
    allFiles = list()
    # Iterate over all the entries
    for entry in listOfFile:
        # Create full path
        fullPath = os.path.join(dirName, entry)
        # If entry is a directory then get the list of files in this directory 
        if os.path.isdir(fullPath):
            allFiles = allFiles + getListOfFiles(fullPath)
        else:
            allFiles.append(fullPath)
                
    return allFiles


def get_all_img_files_recursively(basedir):
    # Get the list of all files in directory tree at given path
    listOfFiles = getListOfFiles(dirName)

    # Get the list of all files in directory tree at given path
    listOfFiles = list()
    for (dirpath, dirnames, filenames) in os.walk(dirName):
        listOfFiles += [os.path.join(dirpath, file) for file in filenames]

    # Filter only on image files
    return [x for x in listOfFiles if x.lower().endswith(('.png', '.jpg', '.jpeg', '.tiff', '.bmp', '.gif'))]


dirName = r"C:\Users\liail\Downloads\gallery_2021_thumbnails";
all_ims = get_all_img_files_recursively(dirName)
resize_all_ims(all_ims)