require "spec_helper"

describe Category do
  describe "relations" do
    it{should have_many(:photos)}
  end
end