class Medium < ActiveRecord::Base
     mount_uploader :file_name, MediaUploader
end
