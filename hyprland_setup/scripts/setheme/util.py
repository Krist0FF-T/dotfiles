import time
import subprocess
import psutil


def restart_hyprpaper():
    for process in psutil.process_iter(['name']):
        if process.info['name'] == 'hyprpaper':
            process.terminate()  # or process.kill() to force terminate
            process.wait()  # Wait for the process to terminate

    # time.sleep(0.1)

    subprocess.Popen(
        ['hyprpaper'],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )


def reload_hypr():
    subprocess.Popen(
        ['ags', 'dispatch', 'forcerendererreload'],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
