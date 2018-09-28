mkdir ~/.local/share/gnome-shell/extensions > /dev/null 2>&1 
cd ~/.local/share/gnome-shell/extensions
rm -f ./master.tar.gz

wget --no-check-certificate https://github.com/BoQsc/GnomeExtension/archive/master.tar.gz

tar -xvzf ./master.tar.gz

# Disable old Gnome Icons extension if it was installed/enabled before
gnome-shell-extension-tool --d example@extensions.gnome.org

  # Delete old ./desktop-icons@csoriano extension folder
  rm -rf ./example@extensions.gnome.org

# Rename extracted extension folder to fit UUID from metadata.json
mv ./GnomeExtension-master ./example@extensions.gnome.org

echo ----------------------
gnome-shell-extension-tool --e example@extensions.gnome.org
gnome-shell --replace & disown
