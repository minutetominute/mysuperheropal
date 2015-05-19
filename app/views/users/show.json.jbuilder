json.extract! @user, :id, :superhero_name, :email
json.image_url asset_path(@user.avatar.url)
