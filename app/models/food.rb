require 'elasticsearch/model'

class Food < ActiveRecord::Base
	include Elasticsearch::Model
	include Elasticsearch::Model::Callbacks
end
