"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "@/src/app/Admin/Products/actions";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Product {
  id: number;
  imageSrc: string;
  name: string;
  featured: boolean;
  category_id: number;
  description: string;
  brandId: number | null;
  category: {
    id: number;
    name: string;
  };
  brand: {
    id: number;
    name: string;
  } | null;
}

export default function Products({ products }: { products: Product[] }) {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id);
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  const handleAddProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    try {
      await createProduct(form);
      setIsAddOpen(false);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleUpdateProduct = async (
    e: React.FormEvent<HTMLFormElement>,
    productId: number
  ) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    try {
      await updateProduct(productId, form);
      setIsEditOpen(false);
      setSelectedProduct(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
          <DialogTrigger asChild>
            <Button>Add Product</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
              <DialogDescription>
                Fill in the product details below
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddProduct} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    required
                    id="name"
                    name="name"
                    placeholder="Product name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="imageSrc">Image URL</Label>
                  <Input
                    required
                    id="imageSrc"
                    name="imageSrc"
                    placeholder="Image URL"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category_id">Category</Label>
                  <Select name="category_id" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from(new Set(products.map((p) => p.category))).map(
                        (category) => (
                          <SelectItem
                            key={category.id}
                            value={category.id.toString()}
                          >
                            {category.name}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="brandId">Brand</Label>
                  <Select name="brandId">
                    <SelectTrigger>
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from(
                        new Set(products.map((p) => p.brand).filter(Boolean))
                      ).map((brand) => (
                        <SelectItem
                          key={brand!.id}
                          value={brand!.id.toString()}
                        >
                          {brand!.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  required
                  id="description"
                  name="description"
                  placeholder="Product description"
                  className="min-h-[100px]"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="featured" name="featured" value="true" />
                <Label htmlFor="featured">Featured Product</Label>
              </div>
              <DialogFooter>
                <Button type="submit">Save Product</Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsAddOpen(false)}
                >
                  Cancel
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="h-[600px] overflow-auto rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead>Featured</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg border"
                  />
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category.name}</TableCell>
                <TableCell>{product.brand?.name || "N/A"}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      product.featured
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {product.featured ? "Yes" : "No"}
                  </span>
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Dialog
                    open={isEditOpen && selectedProduct?.id === product.id}
                    onOpenChange={(open) => {
                      setIsEditOpen(open);
                      if (!open) setSelectedProduct(null);
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedProduct(product)}
                      >
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Edit Product</DialogTitle>
                        <DialogDescription>
                          Modify the product details below
                        </DialogDescription>
                      </DialogHeader>
                      <form
                        onSubmit={(e) => handleUpdateProduct(e, product.id)}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="edit-name">Name</Label>
                            <Input
                              required
                              id="edit-name"
                              name="name"
                              defaultValue={product.name}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="edit-imageSrc">Image URL</Label>
                            <Input
                              required
                              id="edit-imageSrc"
                              name="imageSrc"
                              defaultValue={product.imageSrc}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="edit-category">Category</Label>
                            <Select
                              name="category_id"
                              defaultValue={product.category_id.toString()}
                              required
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {Array.from(
                                  new Set(products.map((p) => p.category))
                                ).map((category) => (
                                  <SelectItem
                                    key={category.id}
                                    value={category.id.toString()}
                                  >
                                    {category.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="edit-brand">Brand</Label>
                            <Select
                              name="brandId"
                              defaultValue={product.brandId?.toString()}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {Array.from(
                                  new Set(
                                    products.map((p) => p.brand).filter(Boolean)
                                  )
                                ).map((brand) => (
                                  <SelectItem
                                    key={brand!.id}
                                    value={brand!.id.toString()}
                                  >
                                    {brand!.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="edit-description">Description</Label>
                          <Textarea
                            required
                            id="edit-description"
                            name="description"
                            defaultValue={product.description}
                            className="min-h-[100px]"
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="edit-featured"
                            name="featured"
                            value="true"
                            defaultChecked={product.featured}
                          />
                          <Label htmlFor="edit-featured">
                            Featured Product
                          </Label>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Save Changes</Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsEditOpen(false)}
                          >
                            Cancel
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
